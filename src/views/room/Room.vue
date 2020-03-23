<template>
  <div style="padding:0px 40px 20px 20px;">
    <div class="page-title">
      {{ $t('room.roomManage') }}
      <el-button
        size="mini"
        type="primary"
        style="margin-left:20px;"
        @click="addRoom"
      >
        {{ $t('room.add') }}
      </el-button>
    </div>
    <el-dialog
      :title="
        roomForm.id ? $t('room.dialogTitle1') : $t('room.dialogTitle')
      "
      :visible.sync="dialogVisible"
      width="30%"
      @close="resetForm('roomForm')"
    >
      <el-form
        ref="roomForm"
        :model="roomForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item
          label="房间名称"
          prop="name"
        >
          <el-input
            v-model="roomForm.name"
            type="text"
            auto-complete="off"
            placeholder
          />
        </el-form-item>
        <el-form-item
          label="是否设置密码"
          prop="has_pwd"
        >
          <el-radio-group v-model="roomForm.has_pwd">
            <el-radio :label="1">
              {{ $t('common.enable') }}
            </el-radio>
            <el-radio :label="0">
              {{ $t('common.disable') }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="password"
          prop="password"
        >
          <el-input
            v-model="roomForm.password"
            type="password"
            auto-complete="off"
            placeholder
          />
        </el-form-item>
        <el-form-item
          label="avatar"
          prop="avatar"
        >
          <el-input
            v-model="roomForm.avatar"
            type="text"
            auto-complete="off"
            placeholder
          />
        </el-form-item>
        <el-form-item
          label="description"
          prop="position"
        >
          <el-input
            v-model="roomForm.description"
            type="text"
            auto-complete="off"
            placeholder
          />
        </el-form-item>
      </el-form>

      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cancelForm('roomForm')">
          {{
            $t('room.cancel')
          }}
        </el-button>
        <el-button
          type="primary"
          @click="submitForm('roomForm')"
        >
          {{
            $t('room.confirm')
          }}
        </el-button>
      </span>
    </el-dialog>
    <!--         所有会议室 -->
    <el-table
      :data="listData"
      :loading="loading"
      border
      style="width: 100%"
      :empty-text="$t('common.noData')"
    >
      <el-table-column
        prop="name"
        label="name"
        width="200"
      />
      <el-table-column
        prop="description"
        label="description"
        width="150"
      />
      <el-table-column
        prop="has_pwd"
        label="has_pwd"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <el-checkbox
            :checked="!!scope.row.has_pwd"
            disabled
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="password"
        label="password"
      />
      <el-table-column
        prop="create_time"
        label="create_time"
        sortable
        width="160"
        ><template slot-scope="scope">
           {{ transferTime(scope.row.create_time) }}
        </template>
         </el-table-column>

      <el-table-column
        :label="$t('room.operation')"
        align="center"
        width="200"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >
            {{ $t('room.edit') }}
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            {{ $t('room.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { dateFormat } from '../../utils/date'
import RoomApi from '@/api/admin'
import {
  UpdateSiteEntity,
  CreateSiteEntity,
  ISite,
  IRoom,
  UpdateChatRoomEntity,
  CreateChatRoomEntity,
  MeetingRoomEntity
} from '@/models'

@Component({
  name: 'manage'
})
export default class extends Vue {
  listData: MeetingRoomEntity[] = []
  siteData: ISite[] = []
  loading = false
  siteFilters: any = []
  async mounted() {
    this.listData = await RoomApi.GetRoom()
    // this.siteFilters = this.siteData.map(item => {
    //   return {
    //     value: item.Code,
    //     text: item.Name
    //   }
    // })
    this.loading = true
    // this.refreshList()
  }

  async refreshList() {
    try {
      this.listData = await RoomApi.GetRoom()
      console.log('allrooms', this.listData)
      this.listData.forEach(item => {
        item.CreatedTime &&
          (item.CreatedTime = moment(item.CreatedTime).format(
            'YYYY-MM-DD HH:mm:ss'
          ))

        item.LastUpdatedTime &&
          (item.LastUpdatedTime = moment(item.LastUpdatedTime).format(
            'YYYY-MM-DD HH:mm:ss'
          ))
      })
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }

  dialogVisible = false
  roomForm: any = {
    name: '',
    description: '',
    password: '',
    avatar: '',
    has_pwd: 0,
    id: 0
  }

  addRoom() {
    this.dialogVisible = true
  }

  filterTag(value: string, row: any) {
    return row.Site === value
  }
  translateSite(siteCode: string) {
    const site: any = this.siteData.find(x => x.Code === siteCode)
    if (site) {
      console.log(site.Name)
      return site.Name
    }
    return siteCode
  }
  validateName(rule: any, value: any, callback: any) {
    if (this.roomForm.RoomName === '') {
      callback(new Error(this.$t('room.nameHint').toString()))
    } else {
      callback()
    }
  }
  validateSite(rule: any, value: any, callback: any) {
    if (this.roomForm.Site === '') {
      callback(new Error(this.$t('room.siteHint').toString()))
    } else {
      callback()
    }
  }

  rules = {
    name: [{ validator: this.validateName, trigger: 'blur' }],
    site: [{ validator: this.validateSite, trigger: 'change' }]
  }

  submitForm(formName: string) {
    (this.$refs[formName] as any).validate(async(valid: boolean) => {
      if (valid) {
        this.dialogVisible = false
        const entity: CreateChatRoomEntity = {
          name: this.roomForm.name,
          description: this.roomForm.description,
          password: this.roomForm.password,
          avatar: this.roomForm.avatar,
          has_pwd: ~~this.roomForm.has_pwd
        }
        console.log('submit:', this.roomForm)
        // 判断是新增还是编辑
        if (this.roomForm.id) {
          const updateEntity: UpdateChatRoomEntity = {
            id: this.roomForm.id,
            ...entity
          }
          console.log('updateEntity', updateEntity)
          await RoomApi.UpdateRoom(updateEntity)
          this.resetForm(formName)
        } else {
          // 添加到數據表中
          await RoomApi.AddRoom(entity)
        }
        this.resetForm(formName)
        // 更新頁面數據
        this.refreshList()
        this.$message(this.$t('common.saveSuccess').toString())
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }

  cancelForm(formName: string) {
    this.dialogVisible = false
    this.resetForm(formName)
  }

  resetForm(formName: string) {
    (this.$refs[formName] as any).resetFields()
    this.roomForm = {
      name: '',
      description: '',
      password: '',
      avatar: '',
      has_pwd: 0,
      id: 0
    }
  }

  handleEdit(index: any, row: any) {
    console.log(index, row)
    this.roomForm.avatar = row.avatar
    this.roomForm.create_time = row.create_time
    this.roomForm.description = row.description
    this.roomForm.has_pwd = row.has_pwd
    this.roomForm.id = row.id
    this.roomForm.name = row.name
    this.roomForm.password = row.password
    console.log('editRoom:', this.roomForm)
    this.dialogVisible = true
  }

  handleDelete(index: any, row: any) {
    this.$confirm(this.$t('common.deleteConfirm').toString(), {
      cancelButtonText: this.$t('common.cancel').toString(),
      confirmButtonText: this.$t('common.confirm').toString()
    })
      .then(_ => {
        // 删除操作
        this.delete(index, row)
      })
      .catch(_ => {
        console.log('取消了删除')
      })
  }
  async delete(index: any, row: any) {
    // 接口刪除
    await RoomApi.DeleteRoom(row.RoomID)
    this.$message(this.$t('common.deleteSuccess').toString())
    // 更新頁面數據
    this.refreshList()
  }

  transferTime(createTime: string) {
    return moment(createTime).format(
      'YYYY-MM-DD HH:mm:ss'
    )
  }
}
</script>

<style lang="scss" scope>
.page-title {
  text-align: left;
  padding: 20px 0px;
  font-size: 20px;
}
</style>
