<script>
  export let style = 'primary'
  export let type = 'button'
  export let disabled = false
</script>

<button {type} {disabled} class={style}>
  <slot></slot>
</button>

<style>
  button {
    border: 0;
    border-radius: 8px;
    color: #323335;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: #7edd47;
  }

  .secondary {
    background: #7edd47;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled{
    background-color: #cccccc;
    color: #333;
    cursor:auto;
  }

  button:disabled:hover{
    transform:scale(1);
    opacity: 1;
  }

</style>