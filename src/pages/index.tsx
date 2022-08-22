import ss from './index.less';
import { Button } from 'antd-mobile';

export default function Home() {
  return (
    <div className={ss.home}>
      <h1 className={ss.title}>欢迎来到学习答题系统</h1>
      <Button type="primary">111</Button>
    </div>
  );
}
