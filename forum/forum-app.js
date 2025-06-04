// forum-app.js - Simple Vue 3 feedback forum
const ForumApp = {
  data() {
    return {
      newComment: '',
      comments: [
        // Example starter comments (can be empty)
      ]
    };
  },
  methods: {
    addComment() {
      const text = this.newComment.trim();
      if (text) {
        this.comments.unshift({
          text,
          time: new Date().toLocaleString()
        });
        this.newComment = '';
      }
    }
  }
};
Vue.createApp(ForumApp).mount('#forum-app');
