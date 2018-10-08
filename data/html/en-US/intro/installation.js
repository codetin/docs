document.write("<h1>Installation</h1>\n\n<h2>From Binary</h2>\n\n<p>You can download binaries of latest release on <a href=\"https://github.com/peachdocs/peach/releases\">GitHub</a>.</p>\n\n<h2>From Source Code</h2>\n\n<p>Install from source code requires you have setup <a href=\"https://golang.org/\">Go</a> environment and set <code>$GOPATH</code> variable correctly.</p>\n\n<p>You can check them with following commands:</p>\n<pre><code class=\"language-sh\">$ go version\ngo version go1.5.1 darwin/amd64\n$ echo $GOPATH\n~unknwon/go\n</code></pre>\n\n<p>The minimum requirement version of Go is <strong>1.3</strong>.</p>\n\n<p>You can then install Peach by executing following command:</p>\n<pre><code class=\"language-sh\">go get github.com/peachdocs/peach\n</code></pre>\n\n<p>Add <code>-u</code> flag to update Peach:</p>\n<pre><code class=\"language-sh\">go get -u github.com/peachdocs/peach\n</code></pre>\n\n<p>You can then use following command to check which version of Peach is installed on your system (Suppose <code>$GOPATH/bin</code> has been added to your <code>$PATH</code>):</p>\n<pre><code class=\"language-sh\">$ peach -v\nPeach version 0.9.2.1214\n</code></pre>\n")