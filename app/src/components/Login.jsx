import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Box, Button, Input, VStack, Text, useToast } from "@chakra-ui/react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, token, isExpired } = useAuth();
    const toast = useToast();

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await login(username, password);
        if (success) {
            toast({
                title: "Login exitoso",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Error de login",
                description: "Usuario o contraseña incorrectos",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box maxWidth="300px" margin="auto" mt={8}>
            <form onSubmit={handleLogin}>
                <VStack spacing={4}>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <Button type="submit" colorScheme="blue" width="100%">Login</Button>
                </VStack>
            </form>
            {token && <Text mt={4}>Usuario logueado</Text>}
            {isExpired && <Text mt={4} color="red.500">Token expirado</Text>}
        </Box>
    );
};

export default Login;