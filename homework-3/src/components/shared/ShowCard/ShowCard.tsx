import { Card, CardHeader, CardBody, Heading, Text, Image } from "@chakra-ui/react"
import NextLink from "next/link"
import { IShowCard } from "@/typings/show"

export default function ShowCard({show}: {show : IShowCard}){
  return (
    <Card overflow={"hidden"}>
      <CardHeader p={0}>
        <NextLink href={`/shows/${show.id}`}>
          <Image src={show.imageUrl} alt="show image" width={960} borderBottom="1px"/>
        </NextLink>
      </CardHeader>
      <CardBody>
        <Heading size="s">{show.title}</Heading>
        <Text>
          <i
            className="fa-regular fa-star fa-md"
            style={{ color: "#FFD43B" }}
          ></i>
          { " " + show.averageRating + "/5"}
        </Text>
      </CardBody>
    </Card>
  )
}