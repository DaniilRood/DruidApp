<script setup>
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { SPACE_INVITE_USER } from 'src/graphql/mutations/mutations';

const props = defineProps({
    group_id: String
})

const name = ref('');
const surname = ref('');
const email = ref('');

const { mutate: inviteUser } = useMutation(SPACE_INVITE_USER);

const  handleFormAddUser = async () => {
    try {
        const result = await inviteUser({       
            input: {
                name: name.value,
                surname: surname.value,
                email: email.value,
                group_id: props.group_id
            },       
        });
    }
    catch(error) {
        console.error(error);
    }     
};

</script>

<template>
<q-dialog>
    <q-card style="width: 400px" class="q-pa-md">
        <q-card-section align="center">
            <div class="text-h6">Добавление нового участника</div>
        </q-card-section>
        <q-form class="" @submit.prevent="handleFormAddUser">
            <q-input class="q-mb-md" filled placeholder="Имя" v-model="name" />
            <q-input class="q-mb-md" filled placeholder="Фамилия" v-model="surname" />
            <q-input class="q-mb-md" filled placeholder="Email" v-model="email"/>
            <q-card-actions align="center">
                <q-btn color="primary" type="submit">Добавить</q-btn>
            </q-card-actions>           
        </q-form>
    </q-card>
</q-dialog>
</template>