from flask import Flask, jsonify
import requests

app = Flask(__name__)

AUTHOR_ID = "2047024"

@app.route("/summary")
def inspire_summary():
    """Fetch papers for a given author and compute citations and h-index."""
    url = (
        f"https://inspirehep.net/api/literature"
        f"?q=authors.recid:{AUTHOR_ID}&size=1000&fields=citation_count"
    )
    r = requests.get(url)
    data = r.json()

    hits = data.get("hits", {}).get("hits", [])
    citation_counts = [
        int(h.get("metadata", {}).get("citation_count", 0)) for h in hits
    ]

    papers = len(citation_counts)
    total_citations = sum(citation_counts)

    # Compute h-index
    sorted_cits = sorted(citation_counts, reverse=True)
    hindex = sum(c >= i + 1 for i, c in enumerate(sorted_cits))

    summary = {
        "papers": papers,
        "citations": total_citations,
        "hindex": hindex,
    }

    return (jsonify(summary), 200, {"Access-Control-Allow-Origin": "*"})

if __name__ == "__main__":
    app.run(port=5001)
