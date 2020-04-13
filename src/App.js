import React, { Component } from "react";
import Statistics from "./Components/Statistic/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/Feedback";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ target }) => {
    this.setState((prevState) => {
      return {
        [target.name]: prevState[target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = (total) =>
    Math.round((this.state.good / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {good + neutral + bad > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback()
              )}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
