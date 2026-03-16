---
---
const allImages = [
  {% for project in site.projects %}
    {% if project.cover %}
      { src: "{{ project.cover }}", title: "{{ project.title }}", tag: "{{ project.tags[0] }}", href: "{{ project.url }}" },
    {% endif %}
    {% if project.gallery %}
      {% for img in project.gallery %}
        { src: "{{ img.src }}", title: "{{ project.title }}", tag: "{{ project.tags[0] }}", href: "{{ project.url }}" },
      {% endfor %}
    {% endif %}
  {% endfor %}
];