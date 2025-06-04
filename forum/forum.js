const ForumApp = {
  data() {
    return {
      newComment: '',
      comments: []
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push({
          text: this.newComment.trim(),
          time: new Date().toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })
        });
        this.newComment = '';
      }
    }
  }
};

Vue.createApp(ForumApp).mount("#forum-app");
