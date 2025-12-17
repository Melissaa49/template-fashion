<template>
  <section class="container panier-editorial">
    <!-- GAUCHE : PRODUITS -->
    <div class="panier-left">
      <h1 class="page-title">Votre panier</h1>

      <div v-if="cart.length === 0" class="empty">
        Votre panier est vide
      </div>

      <div v-else class="products">
        <div v-for="item in cart" :key="item.id" class="product-row">
          <img :src="item.image" />

          <div class="info">
            <strong>{{ item.title }}</strong>
            <span class="price">{{ item.price }} €</span>

            <div class="qty">
              <button @click="decrease(item.id)">−</button>
              <span>{{ item.qty }}</span>
              <button @click="increase(item.id)">+</button>
            </div>
          </div>
        </div>

        <div class="total">
          <span>Total</span>
          <strong>{{ total }} €</strong>
        </div>
      </div>
    </div>

    <!-- SÉPARATEUR -->
    <div class="divider"></div>

    <!-- DROITE : LIVRAISON -->
    <div class="panier-right">
      <h2>Livraison</h2>

      <form class="form">
        <label>
          Email
          <input type="email" placeholder="email@exemple.com" />
        </label>

        <label>
          Téléphone
          <input type="tel" placeholder="06 00 00 00 00" />
        </label>

        <label>
          Adresse
          <input type="text" placeholder="Adresse complète" />
        </label>

        <label>
          Code postal
          <input type="text" placeholder="75001" />
        </label>

        <label>
          Ville
          <input type="text" placeholder="Paris" />
        </label>
      </form>

      <p class="delivery-delay">
        Livraison estimée sous <strong>3 à 5 jours ouvrés</strong>
      </p>

      <NuxtLink to="/checkout" class="btn-primary">
        Continuer la commande
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCart } from '~/composables/useCart'

const { cart, increase, decrease } = useCart()

const total = computed(() =>
  cart.value.reduce((t, i) => t + i.price * i.qty, 0)
)
</script>


<style scoped>
.panier-editorial {
  display: grid;
  grid-template-columns: 1.2fr 1px .8fr;
  gap: 3.5rem;
  padding: 4rem 0;
}

/* séparateur */
.divider {
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(190,160,110,.35),
    transparent
  );
  box-shadow: 2px 0 12px rgba(0,0,0,.05);
}

/* gauche */
.product-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1.4rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid rgba(0,0,0,.06);
}

.product-row img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 18px;
}

.price {
  display: block;
  margin-top: .3rem;
  font-size: .95rem;
}

/* qty */
.qty {
  margin-top: .6rem;
  display: inline-flex;
  gap: .6rem;
  padding: .3rem .7rem;
  border-radius: 999px;
  border: 1px solid var(--text);
  background: #fff;
  font-size: .75rem;
}

/* total */
.total {
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  font-size: 1.15rem;
}

/* droite */
.panier-right h2 {
  font-weight: 500;
  margin-bottom: 1.6rem;
}

.form {
  display: grid;
  gap: 1rem;
}

.form label {
  font-size: .8rem;
  display: flex;
  flex-direction: column;
}

.form input {
  padding: .7rem;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,.15);
}

/* info livraison */
.delivery-delay {
  margin: 1.6rem 0;
  font-size: .85rem;
  color: var(--text-soft);
}

/* bouton */
.btn-primary {
  display: block;
  width: 100%;
  text-align: center;
  padding: .9rem;
  border-radius: 999px;
  font-weight: 600;
}

/* mobile */
@media (max-width: 900px) {
  .panier-editorial {
    grid-template-columns: 1fr;
    gap: 2.8rem;
    padding: 2.8rem 0;
  }

  /* le séparateur devient horizontal */
  .divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(190,160,110,.35),
      transparent
    );
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
  }

  /* on garde le style éditorial */
  .panier-left,
  .panier-right {
    padding: 0;
  }

  .panier-right {
    padding-top: .5rem;
  }

  .form {
    gap: 1.1rem;
  }

  .btn-primary {
    margin-top: .8rem;
  }
}


</style>
