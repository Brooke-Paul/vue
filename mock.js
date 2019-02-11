## mock设置
import Mock from 'mockjs';
import PictureManageService from './setting/PictureManageService';

Mock.setup({
  timeout: '600-1000' // 模拟响应时间
});
const CUSTOM_FINDMOCK_URL = '/custom/find.json';
//正则匹配
Mock.mock(new RegExp(CUSTOM_FINDMOCK_URL), /post|get/i, PictureManageService.findList);



// mock数据准备
import MockUtils from '../../../../utils/MockUtils';

export default {
  findList() {
    const array = [
      {
       customID: 'customID1',
       orderNum: 1,
       companyID:'509802256863915516411873',
       applyName:'应用名字1',
       showTitle:'应用名字1',
       uniqueCode:'uniqueCode1',
       topicPresetID:'topicPresetID1'
      },
      {
        customID: 'customID2',
        orderNum: 2,
        companyID:'509802256863915516411873',
        applyName:'应用名字2',
        showTitle:'应用名字2',
        uniqueCode:'uniqueCode2',
        topicPresetID:'topicPresetID2'
      },
      {
       customID: 'customID3',
       orderNum: 3,
       companyID:'509802256863915516411873',
       applyName:'应用名字3',
       showTitle:'应用名字3',
       uniqueCode:'uniqueCode3',
       topicPresetID:'topicPresetID3'
      },
      {
        customID: 'customID4',
        orderNum: 4,
        companyID:'509802256863915516411873',
        applyName:'应用名字4',
        showTitle:'应用名字4',
        uniqueCode:'uniqueCode4',
        topicPresetID:'topicPresetID4'
      },
    ]
    const ret = array;
    return MockUtils.buildSuccessResult(ret);
  }
}
