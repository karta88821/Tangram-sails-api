{% extends '../layouts/layout.swig' -%} 
{% block title -%}Home{%- endblock %}

{% block content -%}
<div>
    Hello {{name}}
    <br/>
    The number is {{number|numberFormat}}
    <br/>
    <div>
    {{__('Welcome')}}
    <p>Current date is: {{ currentDate }}</p>
    </div>
</div>
{% include "passport.swig" ignore missing %}
{%-endblock %}