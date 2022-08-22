import { QuestionList } from './constants';
import { Button, Toast } from 'antd-mobile';
import { history } from 'umi';
import { useCallback, useState } from 'react';
import cx from 'classnames';
import ss from './index.less';

export default function Question() {
  const [current, setCurrent] = useState(1);
  const [result, setResult] = useState<any[]>([]);

  const handleNext = useCallback(() => {
    if (!result[current - 1]) {
      Toast.info('请先选择一个答案');
      return;
    }
    setCurrent(current + 1);
  }, [result]);

  const handleSelect = useCallback(
    (item, index: number) => {
      const data = [...result];
      data[index] = item;
      setResult(data);
    },
    [result],
  );

  const handleSubmit = useCallback(() => {
    if (!result[current - 1]) {
      Toast.info('请先选择一个答案');
      return;
    }
    const total = result.reduce((prev, next) => {
      return prev.scope + next.scope;
    });
    history.replace(`/result?total=${total}`);
  }, [result, current]);

  return (
    <div className={ss.questions}>
      <div className={ss.content}>
        {QuestionList.map((question, index) => {
          if (question.id !== current) return null;
          return (
            <div key={question.id}>
              <h3>
                {current}: {question.title}
              </h3>
              <div className={ss.list}>
                {question.options.map((select) => {
                  return (
                    <div
                      key={select.id}
                      className={cx(ss.option, {
                        [ss.selected]: result[index]?.id === select.id,
                      })}
                      onClick={() => handleSelect(select, index)}
                    >
                      {select.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {current !== QuestionList.length ? (
        <Button className={ss.btn} type="primary" onClick={() => handleNext()}>
          下一题
        </Button>
      ) : (
        <Button
          className={ss.btn}
          type="primary"
          onClick={() => handleSubmit()}
        >
          提交
        </Button>
      )}
    </div>
  );
}
