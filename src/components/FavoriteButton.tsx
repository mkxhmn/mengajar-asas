import { ButtonHTMLAttributes, FunctionComponent } from "react";

export interface IFavoriteButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean;
}

export const FavoriteButton: FunctionComponent<IFavoriteButton> = ({
  isFavorite,
  ...buttonProps
}) => {
  return (
    <button {...buttonProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 fill-current ${
          isFavorite ? "text-red-500" : "text-gray-500"
        }`}
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export const LoadingFavoriteButton: FunctionComponent = () => (
  <svg
    className="animate-spin h-4 w-4 text-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
