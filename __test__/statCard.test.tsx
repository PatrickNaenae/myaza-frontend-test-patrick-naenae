import React from "react";
import { render, screen } from "@testing-library/react";
import { StatCard } from "@/components/stats-card";

jest.mock("@/components/ui/glowing-effect", () => ({
  GlowingEffect: jest.fn(() => <div data-testid="glowing-effect" />),
}));

describe("StatCard Component", () => {
  const mockProps = {
    title: "Total Revenue",
    value: "$45,231",
    percentageChange: "+20.1%",
    icon: <span data-testid="mock-icon">💰</span>,
    iconBgColor: "bg-blue-500",
    percentageChangeColor: "text-green-500",
    percentageBgColor: "bg-green-100",
  };

  it("renders the StatCard component with correct props", () => {
    render(<StatCard {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    expect(screen.getByText(mockProps.value)).toBeInTheDocument();

    expect(screen.getByText(mockProps.percentageChange)).toBeInTheDocument();

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();

    expect(screen.getByTestId("glowing-effect")).toBeInTheDocument();

    const iconContainer = screen.getByTestId("mock-icon").parentElement;
    expect(iconContainer).toHaveClass(mockProps.iconBgColor);

    const percentageChangeElement = screen.getByText(
      mockProps.percentageChange
    );
    expect(percentageChangeElement).toHaveClass(
      mockProps.percentageChangeColor
    );
    expect(percentageChangeElement).toHaveClass(mockProps.percentageBgColor);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<StatCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
