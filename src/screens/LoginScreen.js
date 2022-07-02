import React, { useState } from 'react';
import { Box, Text, Input, Stack, Button } from 'native-base'
// import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    // // const phoneNumber = getPhoneNumberFromUserInput();
    // const appVerifier = RecaptchaVerifier;

    // const auth = getAuth();
    // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //     .then((confirmationResult) => {
    //         // SMS sent. Prompt user to type the code from the message, then sign the
    //         // user in with confirmationResult.confirm(code).
    //         confirmationResult = confirmationResult;
    //         console.log("THIS CONFIRMATION HERER", confirmationResult);
    //         // ...
    //     }).catch((error) => {
    //         console.log(error);
    //         // Error; SMS not sent
    //         // ...
    //     });

    const handlePhoneChange = (phone) => {
        phone.length < 11 && setPhoneNumber(phone)
    }

    return (
        <Stack justifyContent="center" flex="1" px="4" safeArea mt="4" w={{ base: "100%", md: "25%" }}>
            <Text bold fontSize="xl" mb="4" alignSelf="center">
                Get Started
            </Text>
            <Text fontSize="md" mb="2">
                Mobile Number
            </Text>
            <Input
                variant="rounded"
                fontSize="md"
                placeholder="Your 10 digit Mobile Number"
                InputLeftElement={<Text ml="2" fontSize="md">+91</Text>}
                type="number"
                keyboardType='number-pad'
                onChange={handlePhoneChange}
            />
            <Box alignItems="center">
                <Button
                    mt="10"
                    borderRadius="20"
                    w="100%"
                    onPress={() => navigation.navigate('VerifyOtp')}
                >
                    Click Me
                </Button>
            </Box>
        </Stack>
    )
}

export default LoginScreen