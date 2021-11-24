import { Container } from "./Container";

export const HeroBanner = () => {
  return (
    <div className="mb-16">
      <Container>
        <h1 className="mt-16 mb-8 text-2xl font-extrabold text-gray-800 md:max-w-4xl sm:text-3xl">
          Learning React lifecycle
          <br />
          with SpaceX Capsules public API.
        </h1>
        <button className="text-gray-400 bg-opacity-50 shadow-md rounded-xl p-2 backdrop-filter backdrop-blur firefox:bg-opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </Container>
    </div>
  );
};
