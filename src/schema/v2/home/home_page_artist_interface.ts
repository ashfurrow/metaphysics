import { GraphQLInterfaceType, GraphQLString } from "graphql"
import Image from "schema/v2/image"
import { artworkConnection } from "schema/v2/artwork"

export const HomePageArtistInterface = new GraphQLInterfaceType({
  name: "HomePageArtworkInterface",
  description: "An artwork served from a HomePageModule",
  fields: () => ({
    href: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    formattedNationalityAndBirthday: {
      type: GraphQLString,
    },
    image: Image,
    artworksConnection: {
      type: artworkConnection.connectionType,
    },
  }),
})
