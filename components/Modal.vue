<template>
  <div class="modal" :class="{ active: modal }">
    <div class="modal__window" >
      <button class="modal__close" @click="$emit('closeModal')">
        <img src="@/assets/images/close-circle.svg" alt="" />
      </button>
      <h2 class="modal__title">Напишите или позвоните нам</h2>
      <div class="modal__contact">
        <a href="mailto:fayzrewards.company@mail.ru"><img src="@/assets/images/footer-email.svg"
            alt="" />fayzrewards.company@mail.ru</a>
        <a href="tel:+998882022017"><img src="@/assets/images/footer-call.svg" alt="" />+998 88
          202-20-17</a>
      </div>
      <h2 class="modal__subtitle subtitle">Форма для связи</h2>
      <form action="" class="modal__form" @submit.prevent="sendForm">
        <div class="modal__form-inputs">
          <label class="modal__form-label">
            <span class="modal__form-placeholder">Ваше имя</span>
            <input type="text" class="modal__form-inp" v-model="name" v-bind="nameAttrs" />
            <span class="error"> {{ errors.name }}</span>
          </label>
          <label class="modal__form-label">
            <span class="modal__form-placeholder">Email</span>
            <input type="text" class="modal__form-inp" v-model="email" v-bind="emailAttrs" />
            <span class="error"> {{ errors.email }}</span>
          </label>
          <label class="modal__form-label">
            <span class="modal__form-placeholder">Номер телефона</span>
            <!-- <input type="text" class="modal__form-inp" v-model="number" v-bind="numberAttrs" /> -->
            <IntlTelInput v-model="number" v-bind="numberAttrs" class="modal__form-inp" :options="{
              initialCountry: 'uz', 
            }" />
            <span class="error"> {{ errors.number }}</span>
          </label>
        </div>
        <span class="modal__subtitle subtitle">Товар</span>
        <h3 class="modal__name title">{{ productInfo.name }} ID: {{ productInfo.articul }}</h3>
        <div class="mb-4">
          <textarea class="modal__textarea" placeholder="Комментарий" v-model="text" v-bind="textAttrs"></textarea>
          <span class="error"> {{ errors.text }}</span>
        </div>
        <button class="modal__btn btn">Оставить заявку</button>
      </form>
    </div>
  </div>
</template>

<script setup>

import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import IntlTelInput from "intl-tel-input/vueWithUtils";
import "intl-tel-input/styles";
const emit = defineEmits(['closeModal'])
const { errors, defineField, validate, values } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1, 'Введите Email').email('Некорректный Email'),
      number: z
        .string()
        .regex(/^\+?\d{7,30}$/, 'Введите минимум 6 цифр'), // Используем строку + regex
      name: z.string().min(1, 'Введите имя').max(255, 'Слишком длинное имя'),
      text: z.string().min(30, 'Введите текст').max(255, 'Слишком длинное сообщение')
    })
  ),
});
const [email, emailAttrs] = defineField('email');
const [number, numberAttrs] = defineField('number');
const [name, nameAttrs] = defineField('name');
const [text, textAttrs] = defineField('text');

const props = defineProps({
  modal: Boolean,
  productInfo: Object
})
const form = ref({ name: '', email: '', phone: '', message: '', product: props.productInfo.name, articul: props.productInfo.articul })
const sendForm = async () => {
  const result = await validate(); // Проверяем валидацию
  if (!result.valid) return; // Если есть ошибки, не отправляем

  try {
    await $fetch('/api/telegram', {
      method: 'POST',
      body: values
    })
    emit('closeModal')
  } catch (error) {
    console.error('Ошибка:', error)
    alert('Ошибка при отправке!')
  }
}
</script>

<style lang="scss" scoped>
.iti__country-list{
  background: #000;
}
</style>
