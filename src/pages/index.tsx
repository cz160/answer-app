import ss from './index.less';
import { Button } from 'antd-mobile';
import { Link } from 'umi';

export default function Home() {
  return (
    <div className={ss.home}>
      <h1 className={ss.title}>德学习性格分析系统</h1>
      <Link to="/question">
        <Button className={ss.btn} type="primary">
          开始测试
        </Button>
      </Link>
    </div>
  );
}
