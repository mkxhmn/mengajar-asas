import { FunctionComponent } from "react";
import { ISpaceXResponse, useCapsules } from "../../src/hooks/useCapsules";
import { GetServerSideProps } from "next";
import { Header } from "../../src/components/Header";
import { HeroBanner } from "../../src/components/HeroBanner";
import { Container } from "../../src/components/Container";
import { Card } from "../../src/components/Card";

const Lifecycle: FunctionComponent<{ data: ISpaceXResponse[] }> = (props) => {
  // - [x] lifecycle
  // - [x] map & keys
  // - [x] custom hook
  // - [x] serverside fetch
  // - [ ] custom component

  const spaceXCapsulesData = useCapsules({}, props.data);

  return (
    <div className="mb-5 bg-gray-50">
      <Header />
      <HeroBanner />
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4">
          {spaceXCapsulesData.map((capsule) => (
            <Card key={capsule.capsule_serial} {...capsule} />
          ))}
        </div>
      </Container>
    </div>
  );
};

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async () => {
  const data: ISpaceXResponse[] = await fetch(
    "https://api.spacexdata.com/v3/capsules"
  )
    .then((response) => response.json())
    .then((data) => data);

  return {
    props: { data },
  };
};

export default Lifecycle;
