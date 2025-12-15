<template>
  <div class="newsletter container">
    <h2 class="section-title">Abonnez-vous à notre newsletter</h2>

    <form class="form" @submit.prevent>
      <input class="input" type="email" placeholder="Adresse email" />
      <button class="btn">S’inscrire</button>
    </form>
  </div>
</template>

<style scoped>
.newsletter{
  text-align:center;
}

.form{
  margin-top: 1.5rem;
  display:flex;
  justify-content:center;
  gap: 1rem;
  flex-wrap: wrap;
}

.input{
  width: min(420px, 80vw);
  padding: .9rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,.12);
  background: rgba(255,255,255,.55);
}

.btn{
  border:0;
  background: var(--primary);
  color:#fff;
  padding: .9rem 2rem;
  border-radius: 999px;
  cursor:pointer;
  font-weight: 600;
}
</style>
