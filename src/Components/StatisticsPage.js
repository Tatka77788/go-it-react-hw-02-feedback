import React, { Component } from "react";
import Statistics from "./Statistic/Statistics";
import FeedbackOptions from "./FeedbackOptions/Feedback";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class StatisticsOwn extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClickGood = () => {
    this.setState((s) => {
      return { good: s.good + 1 };
    });
  };
  onHandleClickNeutral = () => {
    this.setState((s) => {
      return { neutral: s.neutral + 1 };
    });
  };
  onHandleClickBad = () => {
    this.setState((s) => {
      return { bad: s.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="good"
            onLeaveFeedback={this.onHandleClickGood}
          />
          <FeedbackOptions
            options="Neutral"
            onLeaveFeedback={this.onHandleClickNeutral}
          />
          <FeedbackOptions
            options="bad"
            onLeaveFeedback={this.onHandleClickBad}
          />
        </Section>
        {good + neutral + bad > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={
                this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default StatisticsOwn;
