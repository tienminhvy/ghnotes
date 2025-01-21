---
title: Ontologies and  Semantic Web
author: Vy Tien
tags: 'ontologies, rdf'
date: '2025-01-21'

---

<h2 id="ontologies-and--semantic-web">Ontologies and  Semantic Web</h2>
<p>Tạm dịch</p>
<ul>
<li>Ontology: bản thể học</li>
<li>Semantic web: web ngữ nghĩa</li>
</ul>
<p>Ví dụ về hiểu sai thông tin</p>
<ul>
<li>Sự kiện 11/9 và Larry Silverstein</li>
<li>Thuật ngữ Runway Incursion đuợc hiểu như thế nào? tùy ngữ cảnh.
<ul>
<li>Airline Operator: Incorrect entering (without clearance) active runway.</li>
<li>Civil Aviation Authority: Unauthorized entering runway.</li>
</ul>
</li>
</ul>
<p>Dataset (tập dữ liệu)</p>
<ul>
<li>Định nghĩa một tòa nhà (building)</li>
</ul>
<h2 id="conceptual-models-to-ontologies">Conceptual models to Ontologies</h2>
<p>Ontological Conceptual Modeling</p>
<ul>
<li>a way to <strong>capture</strong> and <strong>explain</strong> meaning: xác định và giải thích ý nghĩa</li>
<li>must be understandable to non-experts: dễ hiểu với người không chuyên.</li>
<li>computable, use the model to infer new knowledge or validate data: có thể suy luận và kiểm tra tính đúng đắn.</li>
</ul>
<h2 id="ontologies">Ontologies</h2>
<p>are <strong>formal specifications of conceptualization</strong>: định nghĩa chuẩn cho việc khái niệm hóa</p>
<h3 id="ontologies-and-data-integration">Ontologies and Data integration</h3>
<p>SNOMED-CT<br>
Systematized Nomenclature of Medicine - Clinical Terms</p>
<ul>
<li>∼ 300k clinical concepts</li>
<li>international standard – adopted e.g. in UK, USA, Australia</li>
<li>uses ontology reasoning to classify/query the concepts</li>
</ul>
<p><a href="https://browser.ihtsdotools.org/?perspective=full&amp;conceptId1=70704007&amp;edition=MAIN/2020-07-31&amp;release=&amp;languages=en">ihtsdotools</a></p>
<h2 id="current-web-vs.-semantic-web">Current Web vs. Semantic Web</h2>
<p>SoA – semistructured HTML or XML data. There is vast amount of search engines like Google, Yahoo, MSN, etc. Many of them are invaluable, but as the engines use just keywords and/or some natural language preprocessing methods, the search results contain lots of irrelevant results that need to be processed manually.</p>
<p>How to make web search more efficient ?</p>
<ul>
<li>more expressive power for web designers to capture complexities – SW languages (RDF(S), OWL),</li>
<li>more efficient search engines to handle SW languages – new inference techniques for these languages,</li>
<li>better search engines interfaces – more expressive query languages</li>
</ul>
<p><strong>the amount of (unstructured) data is steadily growing</strong></p>
<h2 id="ontologies-and-semantic-web">Ontologies and Semantic Web</h2>
<ul>
<li><strong>ontology</strong> has many definitions, but let’s consider it a <strong>formal representation of a complex domain knowledge</strong> that is shared with others to ensure intelligent system interoperability,</li>
<li><strong>semantic web</strong> is an extension of the current Web in which information is given well-defined meaning, better enabling computers and people to work in cooperation. (cit. Semantic Web. Tim Berners-Lee, James Hendler and Ora Lassila, Scientific American, 2001)</li>
</ul>
<h2 id="idea-of-semantic-web">Idea of Semantic Web</h2>
<ul>
<li>W3C web page - <a href="http://www.w3.org/2001/sw">http://www.w3.org/2001/sw</a></li>
<li>The data format will be either RDF(S) or OWL,</li>
<li>Reasoners for RDF(S) can be used for partial derivation in OWL,</li>
<li>Reasoners for OWL can be used for derivation in RDF(S)</li>
</ul>
<h2 id="unique-data-identification-–-uris">Unique Data Identification – URIs</h2>
<ul>
<li>URI: unique resource identifier</li>
<li>URL: a URI that can be resolved to a content using a protocol (e.g. HTTP)</li>
<li>IRI: International Resource Identifier, is a standard identifier for OWL.</li>
</ul>
<h2 id="open-world-assumption">Open World Assumption</h2>
<p>A semantic web ⇒ handles incomplete knowledge : xử lý tri thức không toàn vẹn</p>
<p>Open World: cannot be proven ⇒ unknown<br>
Closed World: cannot be proven ⇒ false</p>
<pre class=" language-txt"><code class="prism  language-txt">Statement : “John is a Man.”
Query: “Is Jack a Man ?”
OWA Answer: “I don’t know.”
CWA Answer: “No.”
</code></pre>
<h2 id="linked-data">Linked Data</h2>
<p>Web of Documents - WWW</p>
<ul>
<li>webpage: readable by human</li>
<li>identifiers: IRI</li>
<li>transfer protocol: HTTP</li>
<li>unified language: HTML</li>
</ul>
<p>Web of Data - Linked Data</p>
<ul>
<li>webpage: readable by machine</li>
<li>identifier: IRI</li>
<li>transfer protocol: HTTP</li>
<li>unified language: RDF</li>
</ul>
<p>Linked Data [Heath2011] is a method for publishing structured and interlinked data on the web, building up on URIs, HTTP and RDF technologies.</p>
<h3 id="document-vs.-its-content">Document vs. its Content</h3>
<p>ensure proper distinction between a <strong>document</strong> and its <strong>content</strong>.</p>
<ul>
<li>Hash URL: small datasets, hardly grow up</li>
<li>303 URIs: suitable for large datasets, good performance.</li>
</ul>
<pre class=" language-txt"><code class="prism  language-txt">- 303 URIs are of the form http://id.example.org/people/Alice
- HTTP server sends 303 redirect to the corresponding document of the requested resource.
- HTTP client makes another request, based on Accept
headers, the RDF/HTML version is delivered.
</code></pre>
<h3 id="linked-data-presentation">Linked data presentation</h3>
<p>LodView, Marmotta, Callimachus, D2R, Pubby, etc.</p>
<h2 id="open-data">Open Data</h2>
<p>CKAN and DataHub</p>
<h3 id="open-data-levels">Open Data Levels</h3>
<p><img src="https://5stardata.info/images/5-star-steps.png" alt="enter image description here"></p>
<p>⋆ Available on the web (whatever format) but with an open licence, to be Open Data<br>
⋆⋆ Available as machine-readable structured data (e.g. excel instead of image scan of a table)<br>
⋆ ⋆ ⋆ All the above, plus – Non-proprietary format (e.g. CSV instead of excel)<br>
⋆ ⋆ ⋆⋆ All the above, plus – Use open standards from W3C (RDF and SPARQL) to identify things, so that people can point at your stuff<br>
⋆ ⋆ ⋆ ⋆ ⋆ All the above, plus – Link your data to other people’s data to provide context</p>
<h2 id="semantic-web-adopters">Semantic web adopters</h2>
<p>U.S. administration: <a href="http://data.gov">data.gov</a><br>
Czechia: <a href="http://data.gov.cz">data.gov.cz</a></p>

