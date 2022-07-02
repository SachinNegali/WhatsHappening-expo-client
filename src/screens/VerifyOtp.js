import React, { useState } from 'react'
import { Box, Text, Input, Stack, Button } from 'native-base'

const VerifyOtp = ({ navigation }) => {
    const [otp, setOtp] = useState("");

    return (
        <Stack justifyContent="center" flex="1" px="4" safeArea mt="4" w={{ base: "100%", md: "25%" }}>
            <Text bold fontSize="xl" mb="4" alignSelf="center">
                Verify OTP
            </Text>
            <Text fontSize="md" mb="2">
                Otp
            </Text>
            <Input
                variant="underlined"
                fontSize="md"
                placeholder="Enter Otp sent to your mobile number"
                // InputLeftElement={<Text ml="2" fontSize="md">+91</Text>}
                type="number"
                keyboardType='number-pad'
                value={otp}
                onChangeText={(text) => setOtp(text)}
            />
            <Box alignItems="center">
                <Button
                    mt="10"
                    borderRadius="20"
                    w="100%"
                    onPress={() => navigation.navigate('Feed')}
                >
                    Verify
                </Button>
            </Box>
        </Stack>
    )
}

export default VerifyOtp