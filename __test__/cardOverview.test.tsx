import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardOverview from "@/components/card-overview";

jest.mock("@/components/ui/glowing-effect", () => ({
  GlowingEffect: jest.fn(() => <div data-testid="glowing-effect" />),
}));

describe("CardOverview Component", () => {
  const mockProps = {
    cardBalance: "$5,750.20",
    currentBalance: "$3,250.00",
    cardNumber: "1234567890123456",
    expirationDate: "12/25",
  };

  it("renders the CardOverview component with correct props", () => {
    render(<CardOverview {...mockProps} />);

    expect(screen.getByText("My Card")).toBeInTheDocument();

    expect(screen.getByTestId("card-balance")).toHaveTextContent("****");

    expect(screen.getByTestId("current-balance")).toHaveTextContent("****");

    expect(screen.getByText("************3456")).toBeInTheDocument();

    expect(screen.getByText("**/**")).toBeInTheDocument();

    expect(screen.getByTestId("glowing-effect")).toBeInTheDocument();

    expect(screen.getByAltText("master card")).toBeInTheDocument();

    expect(screen.getAllByAltText("curve")).toHaveLength(2);

    expect(screen.getByText("Manage Cards")).toBeInTheDocument();
    expect(screen.getByText("Transfer")).toBeInTheDocument();
  });

  it("toggles the visibility of card balance", () => {
    render(<CardOverview {...mockProps} />);

    expect(screen.getByTestId("card-balance")).toHaveTextContent("****");

    const cardBalanceButton = screen.getByTestId("toggle-card-balance");
    fireEvent.click(cardBalanceButton);

    expect(screen.getByTestId("card-balance")).toHaveTextContent(
      mockProps.cardBalance
    );

    fireEvent.click(cardBalanceButton);
    expect(screen.getByTestId("card-balance")).toHaveTextContent("****");
  });

  it("toggles the visibility of current balance", () => {
    render(<CardOverview {...mockProps} />);

    expect(screen.getByTestId("current-balance")).toHaveTextContent("****");

    const currentBalanceButton = screen.getByTestId("toggle-current-balance");
    fireEvent.click(currentBalanceButton);

    expect(screen.getByTestId("current-balance")).toHaveTextContent(
      mockProps.currentBalance
    );

    fireEvent.click(currentBalanceButton);
    expect(screen.getByTestId("current-balance")).toHaveTextContent("****");
  });

  it("toggles the visibility of expiration date", () => {
    render(<CardOverview {...mockProps} />);

    expect(screen.getByText("**/**")).toBeInTheDocument();

    const expirationDateButton = screen.getByTestId("toggle-expiration-date");
    fireEvent.click(expirationDateButton);

    expect(screen.getByText(mockProps.expirationDate)).toBeInTheDocument();

    fireEvent.click(expirationDateButton);
    expect(screen.getByText("**/**")).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<CardOverview {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
