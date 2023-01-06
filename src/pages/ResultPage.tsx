import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { answers } from "../assets/data";
import styles2 from "../styles/Question.module.css";
import styles from "../styles/ResultPage.module.css";

import { BiX } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

interface Props {
  quiz: any;
}
interface singleQuizListTypes {
  title: string;
  options: {
    title: string;
    correct?: boolean;
    checked?: boolean;
  }[];
  correct?: boolean;
}
[];

const ResultPage = () => {
  const {
    state: { userSubmission },
  } = useLocation();
  const { youtubeid } = useParams();
  const [loading, setLoading] = useState(false);
  if (youtubeid) {
    const [singleQuizList, setSingleQuizList] = useState<singleQuizListTypes[]>(
      answers[youtubeid].questions
    );
    function calculate() {
      let score = 0;

      singleQuizList.forEach((ques, quesId) => {
        let correctList: number[] = [];
        let checkedList: number[] = [];
        ques.options.forEach((option, optionId) => {
          if (option.correct) {
            correctList.push(optionId);
          }

          if (userSubmission[quesId].options[optionId].checked) {
            checkedList.push(optionId);
            option.checked = true;
          }
        });
        if (_.isEqual(correctList, checkedList)) {
          ques.correct = true;
          score += 5;
        } else {
          ques.correct = false;
        }
      });
      return score;
    }
    let total = calculate();
    const winningImg =
      "https://image.similarpng.com/very-thumbnail/2021/04/Champion-golden-trophy-cup-with-red-winner-ribbon-on-transparent-background-PNG.png";
    const wellTriedImg =
      "https://i0.wp.com/sourcingandsupplychain.com/wp-content/uploads/2020/06/better-luck-next-time.png?fit=860%2C906&ssl=1";

    return (
      <>
        {loading && <div>Loading...</div>}

        {!loading && singleQuizList && singleQuizList.length > 0 && (
          <div>
            <div className={styles.Score__section}>
              <div className={styles.score__left}>
                <p>You have got:</p>
                <p>{total} out of 20</p>
                {total === 20 && (
                  <p style={{ padding: "2rem 0", color: "#B8860B" }}>
                    Congratulations
                  </p>
                )}
              </div>
              <div className={styles.score__right}>
                <div className={styles.score__right__img}>
                  <img
                    src={total > 5 ? winningImg : wellTriedImg}
                    alt="winning logo"
                  />
                </div>
              </div>
            </div>
            <h1 style={{ padding: "0 2rem", color: "#B8860B" }}>
              Answer Analysis
            </h1>
            <div className={styles.analysis__section}>
              {singleQuizList.map((answer, quesIndex) => (
                <>
                  <div key={quesIndex} className={styles2.question}>
                    <div className={styles2.question__title}>
                      <h3>
                        <span>
                          {answer.correct ? (
                            <TiTick
                              style={{ color: "green", fontSize: "large" }}
                            />
                          ) : (
                            <ImCross style={{ color: "red" }} />
                          )}
                        </span>
                        <span> #{quesIndex! + 1} </span>
                        {answer.title}
                      </h3>
                      <p style={{ fontSize: "small", color: "gray" }}>
                        Question can have multiple answers
                      </p>
                    </div>
                    <div className={styles2.question__options}>
                      {answer.options.map((option, optionIndex) => (
                        <Option
                          key={optionIndex}
                          text={option.title}
                          className={styles2.question__singleOption}
                          right={
                            option.checked
                              ? option.correct
                                ? true
                                : false
                              : "not-checked"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
};

export default ResultPage;

interface optionType {
  text: string;
  className: string;
  value: number;
  checked: boolean;
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    quesId: number,
    optionId: number
  ) => void;
}
export const Option = ({ className, text, right }: any) => {
  return (
    <>
      <label className={className}>
        {right === "not-checked" ? null : right ? (
          <TiTick style={{ color: "lightgreen" }} />
        ) : (
          <BiX style={{ color: "red" }} />
        )}
        <span>{text}</span>
      </label>
    </>
  );
};
