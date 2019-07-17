import Vue from 'vue'
<% options.globalComponents.forEach(({ name, path }) => { %>import <%= name %> from '<%= path %>'
<% }) %>

<% options.globalComponents.forEach(({ name }) => { %>Vue.component(<%= name %>.name || '<%= name %>', <%= name %>)
<% }) %>
