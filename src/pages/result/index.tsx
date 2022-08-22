import ss from './index.less';
import { Button } from 'antd-mobile';
import { Link, useLocation } from 'umi';
import { useMemo } from 'react';
import { ResultList } from './constants';

export default function Result() {
  const location: any = useLocation();
  const { query } = location;

  const result = useMemo(() => {
    const total = Number(query.total);
    const res = ResultList.find(
      (item) => total >= item.start && total <= item.end,
    );
    return res?.text;
  }, []);

  return (
    <div className={ss.result}>
      <h1 className={ss.title}>结果分析</h1>
      <h2 className={ss.text}>{result}</h2>
      <Link to="/">
        <Button className={ss.btn} type="primary">
          回到首页
        </Button>
      </Link>
    </div>
  );
}
