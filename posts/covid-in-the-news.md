---
title: 'Exploring Coronavirus in the News with Python, using The Guardian’s API, networkx and spaCy NLP'
date: '2020-07-20'
---

### A Little Background

In what seems like a different century and an alternate universe, I started my data science journey in earnest last September when I started an online, intensive program with Springboard. It was a great program that has set me up with both a great foundation in machine learning and data science, but sparked a fascination with programming in general (and Python, in particular). And it has been a big boost in my day-to-day job helping to drive digital transformation for a real estate investment firm (I’m an ex-management consultant and was actually already starting the new role when I began the course). In my old gig in strategy consulting, we used to talk a lot about the Art of the Possible and Python is a great example of framing what might be possible — because it seems like everything is!
My final capstone project for Springboard focused on Natural Language Processing (NLP) — an area of machine learning (ML) that interprets and analyses human language. If you have ever used a chat bot or used Google search to explain something to you than you have encountered NLP in the wild. It is a fascinating and rapidly expanding area of ML and I’m really pleased that my mentor recommended that I explore it for the project — this analysis is an extension of that final capstone project.

> *You can explore the full repository for my capstone project [HERE](https://github.com/dudikbender/springboard).*

With Coronavirus impacting every part of our life in 2020, I thought that it would be interesting to explore and visualise the ways that it has been covered in the news. Pulling data from the Guardian’s API (Application Programming Interface) I was able to put together a dataset of 1,000 articles from all areas of the publication — News, Opinion, Sports, etc. After some cleaning, transformation, and feature extraction I was able to extract some insights from the data and visualise the results as a network graph (the spider web looking image above). Just a note, that you will need some familiarity with Python to follow along with the coding but I’ll do my best to discuss the concepts broadly so even those without a coding background can pick up what I’m trying to put down. And if you are a coding expert... my level could be only be generously described as intermediate, so I am also always interested in feedback and comments on the code. Without further ado, let’s jump into how I did it…

### Getting the data

**The Guardian API**

I decided to use The Guardian because it is a trusted publication, it has strong coverage of UK issues (I’m Canadian but living in London) and, most of all, it has a easy-to-use and well-documented API. It is easy to sign up and get an API key, and you can even test out queries right in their website to see what comes back. I wrote a custom function to send a query to the API, which allows me to set up some parameters that I can adjust. Then I added some functionality to retrieve more than the maximum of 200 articles per call and to convert the JSON data into a more-readable Pandas dataframe (i.e., Excel-like data table).

1. Python code of custom functions to retrieve data from The Guardian’s API and convert the results into a more readable format.
2. Custom functions to get data from The Guardian API, iterate to retrieve more records, and convert to Pandas dataframe.
3. Retrieving Multiple Search Terms

This was a great start, but I wanted to be able to search for multiple terms — Coronavirus has a multitude of names, after all. You can do this directly in The Guardian API call, but I thought it might be cool to build a custom function. The next step, because the different names for Coronavirus are basically interchangeable (for our purposes, at least) was to convert the different names into one, easy-to-identify name. There are a few ways that you can do this in Python, but I wanted to write a custom function in case that would work for future searches.

Custom function to replace terms with one unified term.
So now we have a pretty good dataset, with 1,000 examples of articles that mention some variation of ‘Covid’, ‘Covid-19’, or ‘Coronavirus’. Now time to do some analysis…
Exploring Topics and Text
Word Vectors and TSNE

Scatterplot of articles, grouped by word similarity using spaCy and t-SNE.
[insert photo here.]

The first approach that I wanted to take, which I also explored in my Springboard project, was to use word vectors and TSNE to ‘cluster’ the articles together according to similarity. Word vectors are a way to represent text as a matrix of numerical values. Although interesting, it is outside the scope here, but check this out if you are interested to learn more. I used spaCy for this — a free, open-source package for NLP.

Once I had the vectors for all of the words in all of the article titles, I had a massive, multi-dimensional array of numbers that would be very difficult to make sense of. To solve this I used TSNE (which is available as part of scikit-learn), which is a form of unsupervised learning that reduces complex, multi-dimensional arrays into a simple 2-dimensional array. Basically, it turns all of the complexity of the vectors into x and y values, which is straightforward to plot on a basic scatterplot. I used Bokeh to visualise the results, a chart package with some great features for interaction like hover text and zoom. The results are cool. It is a clever way to show relevance, as the distance between two points in the graph is a representation of their similarity (or difference, depending). For example, in the image above you can see how the graph puts articles that mention authorities / experts together.

### Topic Modelling with Latent Dirichlet Allocation

The next level of analysis was topic modelling using Latent Dirichlet Allocation (LDA). To oversimplify, LDA is an unsupervised learning model that clusters the data into groups (in a slightly different but comparable way to TSNE) but also identifies the words that are most relevant for each topic. When you combine LDA with a Python package called pyLDAvis the result is an interactive dashboard of your text dataset.

pyLDAvis dashboard generated on the Guardian article dataset.
[insert photo here]

The dashboard helps to explore the data and the relevant words. You can also adjust the number of topics that you want, which can help you uncover the distinct groupings of topics in your data. Analysing the data with these ‘clustering’ or topic modelling tools is a great way to generate groups or topics that future data can be bucketed into — but we’ll leave that for another day.

### Visualising the Connections in the News with networkx

The final step in my analysis was to represent the data as a network graph — to highlight the connections and weight of Coronavirus coverage in the news — using a package called networkx. A graph is a model of data that consists of ‘nodes’ and ‘edges’ — nodes are elements in the data and edges are the relationship between those elements. In this case, the nodes are articles, sections of The Guardian, and entities (people, organisations, or places) mentioned in the article titles and the edges (or connections) are created when one of the three appears in the other. You can see this visually as points and lines, with the points the nodes and the lines the edges. In the image below, I have annotated ‘Coronavirus’ along with the newspaper sections. The number of lines is a quick way to identify how often Coronavirus is mentioned in each section of The Guardian and there are several cases where a person or organisation is mentioned in several sections and articles. Some connections are not surprising, such as World News, Opinion, or Politics, having a large number. But the sheer scope of mentions speaks to how ubiquitous this pandemic has become — everything from Fashion to Books to Football have several articles written about it.

Network graph visualisation of entire dataset, with newspaper sections annotated.
[insert photo here]

### Next Steps
This analysis is only really scratching the surface of what is possible with NLP, unsupervised learning, and network analysis. One obvious next step that I’d like to take is to simply extract a larger dataset — seeing the connections with 10,000 articles would be great. It is also possible with the code to create ‘sub-graphs’ by slicing the dataset, so you can focus on a specific section or mention. Another method would be to explore other news organisations, particularly those with similarly well-documented APIs to The Guardian.

On the more ambitious end, I’d also like to explore using web scraping tools, like BeautifulSoup or scrapy, to extract the actual text of the article. Extracting the people, places, or organisations mentioned from the article itself would likely produce a much denser graph and more interesting connections.

Lastly, and this is something that I explored in the capstone but would like to expand on, is using classification machine learning model to predict features of the dataset. For example, predicting the section of the newspaper that the article appears in based on the text of the title might produce some interesting results — particularly in the mismatches!
Last note

If others do find this useful as a tool, I will spend the time to refactor the code for this analysis into a more re-usable format.