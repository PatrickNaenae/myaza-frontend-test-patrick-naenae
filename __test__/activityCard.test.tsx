import React from "react";
import { render, screen } from "@testing-library/react";
import ActivityCard from "@/components/activity-card";

jest.mock("@/components/ui/glowing-effect", () => ({
  GlowingEffect: jest.fn(() => <div data-testid="glowing-effect" />),
}));

jest.mock("recharts", () => ({
  PieChart: jest.fn(({ children }) => (
    <div data-testid="pie-chart">{children}</div>
  )),
  Pie: jest.fn(({ children }) => <div data-testid="pie">{children}</div>),
  Cell: jest.fn(({ fill }) => (
    <div data-testid={`cell-${fill.replace("#", "")}`} />
  )),
  ResponsiveContainer: jest.fn(({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  )),
}));

describe("ActivityCard Component", () => {
  const mockProps = {
    dailyPaymentPercentage: 40,
    hobbyPercentage: 30,
    otherPercentage: 30,
    chartPercentage: 70,
    chartLabel: "Last 7 Days",
  };

  it("renders the ActivityCard component with correct props", () => {
    render(<ActivityCard {...mockProps} />);

    expect(screen.getByText("Activity")).toBeInTheDocument();

    expect(screen.getByText(mockProps.chartLabel)).toBeInTheDocument();

    expect(
      screen.getByText(`${mockProps.chartPercentage}%`)
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${mockProps.dailyPaymentPercentage}%`)
    ).toBeInTheDocument();

    expect(
      screen.getByText(`${mockProps.hobbyPercentage}%`)
    ).toBeInTheDocument();

    expect(screen.getByText("See All Activity")).toBeInTheDocument();

    expect(screen.getByTestId("glowing-effect")).toBeInTheDocument();

    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
    expect(screen.getByTestId("pie")).toBeInTheDocument();
    expect(screen.getByTestId("responsive-container")).toBeInTheDocument();

    expect(screen.getByTestId("cell-6359E9")).toBeInTheDocument();
    expect(screen.getByTestId("cell-64CFF6")).toBeInTheDocument();
    expect(screen.getByTestId("cell-3A3A5A")).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<ActivityCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
