<template>
  <div class="login">
    <v-card-title class="ml-10 px-0 text-h5 font-weight-medium">Iniciar Sesion</v-card-title>
    <img alt="login image" src="../assets/img/programmer.svg">
  </div>
  <form id="register" v-on:submit.prevent="submit">
    <div class="col-12 form-group">
      <label class="col-form-label col-form-label-lg">E-mail<span class="text-danger">*</span></label>
      <input type="email" v-model.trim="email" :class="{'is-invalid' : validationStatus($v.email)}" class="form-control form-control-lg">
      <div v-if="!$v.email.required" class="invalid-feedback">El E-mail es requerido</div>
      <div v-if="!$v.email.email" class="invalid-feedback">El E-mail no es valido</div>
    </div>
    <div class="col-12 form-group">
      <label class="col-form-label col-form-label-lg">Password<span class="text-danger">*</span></label>
      <input type="password" v-model.trim="password" :class="{'is-invalid' : validationStatus($v.password)}" class="form-control form-control-lg">
      <div v-if="!$v.password.required" class="invalid-feedback">La contraseña es requerida</div>
      <div v-if="!$v.password.minLength" class="invalid-feedback">La contraseña es de minimo {{$v.password.$params.minLength.min}} caracteres</div>
      <div v-if="!$v.password.maxLength" class="invalid-feedback">La contraseña es de maximo {{$v.password.$params.maxLength.max}} caracteres</div>
    </div>
    <div class="col-12 form-group text-center">
      <button class="btn btn-vue btn-lg col-4">Login</button>
    </div>
  </form>
</template>

  <script>
    import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'
    export default {
      name: "Login.vue",
      data: function () {
        return {
          email: '',
          password: '',
        }
      },
      validations: {
        email: {required, email},
        password: {required, minLength: minLength(8), maxLength: maxLength(16)}
      },

      methods: {

        resetData: function () {
          this.email = '';
          this.password = '';
        },

        validationStatus: function (validation) {
          return typeof validation != "undefined" ? validation.$isError : false;
        },

        submit: function () {
          this.$v.$touch();
          if(this.$v.$pendding || this.$v.$error) return;

          alert('Data Submit');
          this.$v.$reset();
          this.resetData();
        }
      }
    }
  </script>

  <style>
    .btn-vue{
      background: #ce1212;
      color: #1b1717;
      font-weight: bold;
    }
  </style>