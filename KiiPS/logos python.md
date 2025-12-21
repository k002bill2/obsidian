

client = QdrantClient(host="localhost", port=6333)
192.168.1.170


llm = ChatOllama(base_url="192.168.1.170",temperature=0, model="gemma3:12b")

streamlit run 01_PDF.py
