<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const emit = defineEmits(["custom-event"]);
const steps = [1, 2, 3];
const currentStep = ref(1);
const count = ref('')
const date = ref(null);
const userInfo = ref({
  name: '',
  email: '',
  phone: ''
})
const goToStep = (step) => {
  if (step < 4) {
    currentStep.value = step;
  } else {
    emit('gratitude')
  }
};

const isActive = (step) => step <= currentStep.value;
</script>

<template>
  <div class="step-form">
    <h2 class="steps__title">Свяжитесь с нами сейчас</h2>
    <div class="progress-bar-container">
      <div class="steps">
        <div
          v-for="(step, index) in steps"
          :key="step"
          class="step"
          :class="{ active: isActive(step) }"
        
        >
          <span class="number">{{ step }}</span>
        </div>
      </div>
      <div class="progress-line">
        <div
          class="progress"
          :style="{ width: `${(currentStep / steps.length) * 75}%` }"
        ></div>
      </div>
    </div>
    <div class="step-form__item mt-10" v-if="currentStep == 1">
      <h3 class="step-form__title">{{$t("event_date")}}</h3>
      <div
        class="step-form__wrapper flex justify-between items-center mt-6 gap-3 flex-wrap"
      >
        <VueDatePicker
          type="date"
          locale="ru-RU"
          :min-date="new Date()"
          :enable-time-picker="false"
          class="step-form__datepicker"
          v-model="date"
          :placeholder="$t('selectDate')"
          :cancelText="$t('cancel')"
          :selectText="$t('select')"
        ></VueDatePicker>
        <button :disabled="!date" class="btn step-form__btn" @click="goToStep(2)">Далее</button>
      </div>
    </div>
    <div class="step-form__item mt-10" v-else-if="currentStep == 2">
      <h3 class="step-form__title mb-7">Какой товар вас интересует и в каком количестве?</h3>
      <div class="flex gap-[15px] flex-col sm:flex-row">
        <UICheckbox>Медали</UICheckbox>
        <UICheckbox>Трофеи</UICheckbox>
        <UICheckbox>Гаджеты</UICheckbox>
        <UICheckbox>Спортивная одежда</UICheckbox>
        <UICheckbox>Другие</UICheckbox>
      </div>
      <div
        class="step-form__wrapper flex justify-between items-center mt-6 gap-3 flex-wrap"
      >
        <input
          type="text"
          class="step-form__count"
          placeholder="Введите кол-во, шт"
          v-model="count"
        />
        <button :disabled="count == ''" class="btn step-form__btn" @click="goToStep(3)">Далее</button>
      </div>
    </div>
    <div class="step-form__item mt-10" v-else>
      <h3 class="step-form__title mb-7">Пожалуйста, заполните форму</h3>
      <div class="flex gap-[15px] flex-col sm:flex-row justify-between items-center sm:items-end">
        <div class="flex flex-col gap-7">
          <input
            type="text"
            class="step-form__input"
            placeholder="Ваше имя"
            required
            v-model="userInfo.name"
          />
          <input
            type="email"
            class="step-form__input"
            placeholder="Email (необезательно)"
            v-model="userInfo.email"
          />
          <input
            type="number"
            class="step-form__input"
            placeholder="Номер телефона"
            
            v-model="userInfo.phone"
            required
          />
        </div>
        <button
          :disabled="userInfo.name == '' || userInfo.phone == ''"
         class="btn step-form__btn" @click="goToStep(4)">Далее</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.step-form {
  max-width: 594px;
  width: 100%;
}
.progress-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
}

.steps {
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  position: relative;
}

.step {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  transition: 0.3s;
  background-color: #353535;
}
.step-form__btn {
  padding-top: 16px;
  padding-bottom: 16px;
  background: #FFC380;
  width: 203px;
}
.step.active {
  background-color: #ffc380;
  border-color: #ffc380;
}
.step .number {
  color: #7c7c7c;
  transform: translateY(-25px);
  font-weight: 600;
  font-size: 14px;
  line-height: 14.84px;
}
.step.active .number {
  color: #ffc380;
}

.progress-line {
  width: 100%;
  height: 2px;
  background-color: #444;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;
}
.steps__title {
  margin-bottom: 70px;
  color: #ffc380;
}
.progress {
  height: 2px;
  background-color: #ffaa33;
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.3s;
}
.dp__input_wrap {
  border-radius: 100px;
  overflow: hidden;
}
.dp__input {
  border: none;
  background: #212121 !important;
}
.step-form__datepicker {
  border-radius: 100px;
}
.dp__theme_light {
  width: 301px;
  --dp-text-color: #fff;
  /* --dp-border-radius: 100px; */
  --dp-input-padding: 16px 20px;
  --dp-font-size: 14px;
  background: #212121 !important;
  border: none !important;
}
.step-form__item .checkbox-name {
  font-size: 14px;
}
.step-form__count {
  font-size: 14px;
  line-height: 18.2px;
  color: #fff;
  padding: 16px 25px;
  border-radius: 100px;
  width: 301px;
  &::placeholder {
    color: #6d6d6d;
  }
}
.step-form__input {
  border: none;
  border-bottom: 1px solid #4a4a4a;
  background: transparent;
  padding-bottom: 18px;
  font-size: 14px;
  line-height: 18.2px;
  width: 359px;
  outline: none;
}
</style>
