import React, { useEffect, useState, useMemo } from "react";
import type { CallBackProps, Step } from "react-joyride";
import Joyride, { EVENTS, STATUS } from "react-joyride";

interface TourGuideProps {
  start: boolean;
  setStartTour: (value: boolean) => void;
  onTourEnd: () => void;
}

const TourGuide = ({ start, setStartTour, onTourEnd }: TourGuideProps) => {
  const [progress, setProgress] = useState<number>(1);
  const totalSteps: number = 7;

  const generateSteps = (val: number): Step[] => [
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">
            Financial Overview
          </p>
          <p className="text-sm">
            This section provides a quick summary of your financial performance.
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <strong>Title:</strong> Indicates the type of financial metric
              (e.g., Total Income, Total Outcome).
            </li>
            <li>
              <strong>Value:</strong> Displays the current amount for the
              metric.
            </li>
            <li>
              <strong>Percentage Change:</strong> Shows the change in percentage
              compared to the previous period.
            </li>
          </ul>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-custom-purple">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "auto",
      target: "#step-0",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">
            Analytics Overview
          </p>
          <p className="text-sm">
            This chart provides a visual representation of your income and
            outcome over time.
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <strong>Income (Purple Bars):</strong> Represents the total income
              for each month.
            </li>
            <li>
              <strong>Outcome (Blue Bars):</strong> Represents the total
              expenses for each month.
            </li>
            <li>
              <strong>Months (X-Axis):</strong> Displays the timeline for the
              data.
            </li>
            <li>
              <strong>Amount (Y-Axis):</strong> Displays the amount for the
              data.
            </li>
          </ul>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-custom-purple">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "auto",
      target: "#step-1",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">Card Overview</p>
          <p className="text-sm">
            This section provides an overview of your card information and
            balance. You can toggle the visibility of sensitive information
            using the eye icons.
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <strong>Card Balance:</strong> Displays the total balance
              available on your card. Click the eye icon to show or hide the
              balance.
            </li>
            <li>
              <strong>Current Balance:</strong> Shows the current available
              balance for spending. Click the eye icon to show or hide the
              balance.
            </li>
            <li>
              <strong>Card Number:</strong> Displays the last four digits of
              your card number. The first 12 digits are masked for security.
            </li>
            <li>
              <strong>Expiration Date:</strong> Indicates when your card
              expires. Click the eye icon to show or hide the expiration date.
            </li>
            <li>
              <strong>Actions:</strong> Use the buttons to manage your cards or
              transfer funds.
            </li>
          </ul>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-custom-purple">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "auto",
      target: "#step-2",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">
            Recent Transactions Overview
          </p>
          <p className="text-sm">
            This section displays your most recent transactions.
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <strong>Name:</strong> Shows the name or description of the
              transaction.
            </li>
            <li>
              <strong>Date:</strong> Indicates when the transaction occurred.
            </li>
            <li>
              <strong>Amount:</strong> Displays the transaction amount.
            </li>
            <li>
              <strong>Status:</strong> Shows the current status of the
              transaction (e.g., completed, pending).
            </li>
          </ul>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-custom-purple">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "auto",
      target: "#step-3",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">
            Activity Overview
          </p>
          <p className="text-sm">
            This section provides a visual breakdown of your spending activity.
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <strong>Pie Chart:</strong> Represents the distribution of your
              spending across different categories.
            </li>
            <li>
              <strong>Daily Payment:</strong> Shows the percentage of spending
              on daily payments.
            </li>
            <li>
              <strong>Hobby:</strong> Displays the percentage of spending on
              hobbies.
            </li>
            <li>
              <strong>Other:</strong> Represents the percentage of spending on
              other activities.
            </li>
            <li>
              <strong>See All Activity:</strong> Click the button to view
              detailed activity.
            </li>
          </ul>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-custom-purple">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "auto",
      target: "#step-4",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">Need Help?</p>
          <p className="text-sm">
            If you need assistance, click on the chat icon at the bottom right
            corner of the page to chat with our Uifry AI.
          </p>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-custom-purple">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "auto",
      target: "#step-5",
    },
    {
      content: (
        <div className="flex flex-col gap-4 px-2 text-left">
          <p className="text-sm text-primary font-extrabold">
            Customize Your View
          </p>
          <p className="text-sm">
            You can switch between dark and light modes to customize your
            viewing experience. Click the toggle to change the theme.
          </p>
          <div className="absolute bottom-[22px] left-[40%] text-sm text-custom-purple">
            Step {val} of {totalSteps}
          </div>
        </div>
      ),
      placement: "auto",
      target: "#step-6",
    },
  ];

  const memoizedSteps = useMemo(() => generateSteps(progress), [progress]);

  const [state, setState] = useState({
    run: start,
    stepIndex: 0,
    steps: memoizedSteps,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      steps: memoizedSteps,
    }));
  }, [memoizedSteps]);

  useEffect(() => {
    setState((prevState) => {
      if (!start || prevState.run) return prevState;
      return { ...prevState, run: true, stepIndex: 0 };
    });
  }, [start]);

  const handleJoyrideCallback = async (data: CallBackProps) => {
    const { status, type, index } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setState((prevState) => ({
        ...prevState,
        run: false,
        stepIndex: 0,
      }));
      setStartTour(false);
      onTourEnd();
    } else if (type === EVENTS.STEP_BEFORE) {
      setProgress(index + 1);
    }
  };

  return (
    <Joyride
      continuous
      callback={handleJoyrideCallback}
      run={state.run}
      steps={state.steps}
      scrollToFirstStep
      hideCloseButton={false}
      disableCloseOnEsc
      disableOverlayClose
      spotlightPadding={10}
      showSkipButton
      styles={{
        buttonNext: {
          backgroundColor: "#1D1D41",
          borderRadius: "5px",
          color: "#FFFFFF",
          padding: "8px 12px",
        },
        buttonSkip: { color: "#A3A3A3" },
        options: {
          zIndex: 100,
          arrowColor: "#CBC8FF",
          backgroundColor: "#CBC8FF",
          textColor: "#000000",
          overlayColor: "rgba(0, 0, 0, 0.8)",
          primaryColor: "#CBC8FF",
        },
      }}
    />
  );
};

export default TourGuide;
