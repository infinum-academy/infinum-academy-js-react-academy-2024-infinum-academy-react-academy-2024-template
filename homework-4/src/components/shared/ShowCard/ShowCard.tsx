import { Card, CardHeader, CardBody, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { IShow } from "@/typings/show";
import ImageWithFallback from "../utilities/ImageWithFallback/ImageWithFallback";

export default function ShowCard({ show }: { show: IShow }) {
  return (
    <Card overflow={"hidden"}>
      <CardHeader p={0}>
        <NextLink
          href={`/shows/${show.id}`}
          passHref
        >
          <ImageWithFallback
            src={show.image_url || ""}
            alt="show image"
            width={1200}
            defaultWidth="1200"
            defaultHeight="800"
          />
        </NextLink>
      </CardHeader>
      <CardBody>
        <Heading size="s">{show.title}</Heading>
        <Text>
          <i
            className="fa-regular fa-star fa-md"
            style={{ color: "#FFD43B" }}
          ></i>
          {show.average_rating && show.average_rating + "/5"}
          {!show.average_rating && " Not rated yet"}
        </Text>
      </CardBody>
    </Card>
  );
}
