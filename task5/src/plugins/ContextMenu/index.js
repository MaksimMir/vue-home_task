export default {
    install (Vue) {
      if (this.installed) {
        return;
      }
   
      this.installed = true;
      this.caller = null;
   
      Vue.prototype.$context = {

        EventBus: new Vue(),

        show (items, evt) {
          const caller = evt.target;
          if (this.caller !== caller) {
            this.caller = caller;
            this.EventBus.$emit('init', {items, caller});
          } else {
            this.close();
          }
                        
        },
   
        close () {
          this.caller = null;
          this.EventBus.$emit('close')
        }
      }
    }
  }