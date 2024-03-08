---
parent: '[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
title: 
type: journal
date: <% tp.file.title.split(" ")[0] %>
cssclasses:
  - oc-padding-0
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

# <% tp.file.title %>

> [!multi-column]
>
> > [!button]
> > Previous Journal
> >
> > **[[00 Journal/Entries/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") + " Journal" %>|<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]**
>
> > [!button]
> > Days Note
> >
> > **[[00 Journal/Periodic/Daily/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Next Journal
> >
> > **[[00 Journal/Entries/<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>|<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]**

###### Morning

> [!morning] ### 🌅 Morning Log
> 🕘 **hh:mm**
>
> Text

> [!morning] ### 💭 Dream
> - log-dream-lucidity::
> - log-dream-clarity::
>
> Text

###### Morning Data

> [!morning] ### Morning Data
> - log-sleep-rating::
> - log-nightmares::

###### Evening

> [!evening] ### 🌇 Evening Log
> 🕤 **hh:mm**
>
> Text

> [!evening] ### 🙏 Gratitude Journal
> 1.
> 2.
> 3.

> [!evening] ### 👑 Achievement Journal
> 1.
> 2.
> 3.

###### Evening Data

> [!evening] ### Evening Data
> - log-day-rating::

## What I Learned

## Logs