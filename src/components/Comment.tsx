import {
  StyleSheet,
} from 'react-native'
import React from 'react'
import {
  Box,
  HStack,
  Text,
  Image
} from 'native-base'
import {
  User
} from '../types/User'
import ProfileIcon from './ProfileIcon'

export type CommentProps = {
  user: User;
  time_ago: number;
  rating: number;
  comment: string;
}

const Comment = (props: CommentProps) => {
  return (
    <Box width={345} marginTop={26}>
      <HStack>
        <HStack flex={2}>
          <ProfileIcon source={props.user.pfp} sidelen={24} style={{ marginRight: 8 }} />
          <Text color="gray.900" fontSize={14} lineHeight={22}  fontWeight={600}>
            {props.user.name}
          </Text>
          <Text color="gray.300" fontSize={14} lineHeight={22}  fontWeight={100}>
            {"  "}•  {props.time_ago}hrs ago
          </Text>
        </HStack>

        {/* Rating */}
        <HStack alignItems="center" justifyContent="space-evenly" width={50} mr={1}>
          <Image
            source={require("../../assets/Star.png")}
            style={{ width: 12, height: 12 }}
            alt="star"
          />
          <Text style={styles.rating} color="gray.900"  fontWeight={600} mx={2}>
            {4.8}
          </Text>
          <Text style={styles.max_rating} color="gray.300"  fontWeight={600}>/5</Text>
        </HStack>
        
      </HStack>

      <Box width={345} marginTop={2} borderWidth={1} borderColor="gray.100" borderRadius={8} px={3} py={2}>
        <Text  fontWeight={100}>{props.comment}</Text>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  rating: {
    fontSize: 13,
    lineHeight: 22
  },

  max_rating: {
    fontSize: 13,
    lineHeight: 22
  }
})

export default Comment