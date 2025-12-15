<template>
  <button class="btn"><slot /></button>
</template>

<style scoped>
.btn{
  border:0;
  background: var(--primary);
  color:#fff;
  padding: .9rem 1.8rem;
  border-radius: 999px;
  cursor:pointer;
  font-weight: 600;
}
</style>
