import ss from './index.less';
import { Button } from 'antd-mobile';

export default function Home() {
  return (
    <div className={ss.home}>
      <h1 className={ss.title}>性格分析系统</h1>
      <Button className={ss.btn} type="primary">
        开始测试
      </Button>
    </div>
  );
}
