<template>
    <q-page class="flex flex-center">
        <q-card style="width: 400px">
            <q-card-section>
                <div class="text-h6 text-center">Авторизация</div>
            </q-card-section>

            <q-form @submit.prevent="handleSignin" class="q-gutter-md">
                <q-card-section>
                    <q-input
                        class="q-mb-md"
                        filled
                        v-model="login"
                        label="Email"
                        lazy-rules
                    />
                    <q-input
                        filled
                        v-model="password"
                        label="Пароль"
                        type="password"
                        lazy-rules
                    />
                </q-card-section>

                <q-card-actions align="center">
                    <q-btn label="Авторизоваться" type="submit" color="primary" no-caps />
                </q-card-actions>
            </q-form>
        </q-card>
    </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { USER_SIGN_IN } from 'src/graphql/mutations/userSignIn';
import { useRouter } from 'vue-router';

const login = ref('');
const password = ref('');
const router = useRouter();

const { mutate: signin, } = useMutation(USER_SIGN_IN, {
    onCompleted: (data) => {
        const { access_token } = data.userSignIn.record;
        localStorage.setItem('access_token', access_token);
        router.push('/');
    }
});

const  handleSignin = async () => {
    try {
        const result = await signin({       
            input: {
                login: login.value,
                password: password.value,
            },       
        });
    
        if (result.data) {
            const { access_token } = result.data.userSignIn.record;
            localStorage.setItem('access_token', access_token);
            router.push('/');
        }
    }
    catch(error) {
        console.error(error);
    }     
};
</script>

<style>

</style>

