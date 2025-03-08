import React from "react";
import { render, screen } from "@testing-library/react";
import AnalyticsCard, { formatYAxisLabel } from "@/components/analytics-card";

jest.mock("@/components/ui/glowing-effect", () => ({
  GlowingEffect: jest.fn(() => <div data-testid="glowing-effect" />),
}));

jest.mock("recharts", () => ({
  BarChart: jest.fn(({ children }) => (
    <div data-testid="bar-chart">{children}</div>
  )),
  Bar: jest.fn(() => <div data-testid="bar" />),
  XAxis: jest.fn(() => <div data-testid="x-axis" />),
  YAxis: jest.fn(({ tickFormatter }) => (
    <div data-testid="y-axis">
      {[10000, 20000].map((value) => (
        <div key={value} className="recharts-cartesian-axis-tick">
          {tickFormatter ? tickFormatter(value) : value}
        </div>
      ))}
    </div>
  )),
  CartesianGrid: jest.fn(() => <div data-testid="cartesian-grid" />),
  Tooltip: jest.fn(() => <div data-testid="tooltip" />),
  ResponsiveContainer: jest.fn(({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  )),
}));

describe("AnalyticsCard Component", () => {
  const mockIncomeData = [
    { month: "Jan", value: 10000 },
    { month: "Feb", value: 20000 },
  ];
  const mockOutcomeData = [
    { month: "Jan", value: 5000 },
    { month: "Feb", value: 15000 },
  ];
  const mockYear = "2023";

  it("renders the AnalyticsCard component with correct props", () => {
    render(
      <AnalyticsCard
        incomeData={mockIncomeData}
        outcomeData={mockOutcomeData}
        year={mockYear}
      />
    );

    expect(screen.getByText("Analytics")).toBeInTheDocument();

    expect(screen.getByText(mockYear)).toBeInTheDocument();

    expect(screen.getByText("Income")).toBeInTheDocument();
    expect(screen.getByText("Outcome")).toBeInTheDocument();

    expect(screen.getByTestId("glowing-effect")).toBeInTheDocument();

    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
    expect(screen.getAllByTestId("bar")).toHaveLength(2);
    expect(screen.getByTestId("x-axis")).toBeInTheDocument();
    expect(screen.getByTestId("y-axis")).toBeInTheDocument();
    expect(screen.getByTestId("cartesian-grid")).toBeInTheDocument();
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
    expect(screen.getByTestId("responsive-container")).toBeInTheDocument();
  });

  it("formats the Y-axis label correctly", () => {
    render(
      <AnalyticsCard
        incomeData={mockIncomeData}
        outcomeData={mockOutcomeData}
        year={mockYear}
      />
    );

    const yAxisLabels = screen.getAllByText(/k$/);
    expect(yAxisLabels[0].textContent).toBe("10k");
    expect(yAxisLabels[1].textContent).toBe("20k");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <AnalyticsCard
        incomeData={mockIncomeData}
        outcomeData={mockOutcomeData}
        year={mockYear}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("formatYAxisLabel", () => {
  it("formats the Y-axis label correctly", () => {
    expect(formatYAxisLabel(10000)).toBe("10k");
    expect(formatYAxisLabel(20000)).toBe("20k");
    expect(formatYAxisLabel(15000)).toBe("15k");
  });
});
