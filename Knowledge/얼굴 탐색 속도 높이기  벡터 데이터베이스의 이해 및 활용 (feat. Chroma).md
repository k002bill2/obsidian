---
title: "얼굴 탐색 속도 높이기 : 벡터 데이터베이스의 이해 및 활용 (feat. Chroma)"
source: https://blog.kbanknow.com/66
author:
  - "[[케이뱅크]]"
published: 2023-11-13
created: 2025-07-03
description: 들어가며 안녕하세요! 케이뱅크 데이터서비스팀에서 AI 모델 개발을 하고 있는 김하영입니다. AI에 관심이 있는 분들이라면, 벡터 임베딩(Vector Embedding)에 대해 한 번쯤은 들어보셨을 겁니다. AI 애플리케이션에서 사용되는 모든 데이터들은 AI 모델을 통해 임베딩되며, 이 임베딩 벡터들 간의 관계를 분석함으로써 분류, 예측, 번역, 요약 등 다양한 태스크를 수행합니다. 우리가 일상 및 업무에서 잘 활용하고 있는 ChatGPT에서도 물론 벡터 임베딩이 사용되고 있답니다. 이처럼 벡터 임베딩은 이미지 처리부터 자연어 처리(NLP), 추천 시스템, 대규모 언어 모델(Large Language Model, LLM) 등 다양한 AI 분야에서 빼놓을 수 없는 핵심 개념 중 하나입니다. 벡터 임베딩은 무..
tags:
  - clippings
---
### 들어가며

안녕하세요! 케이뱅크 데이터서비스팀에서 AI 모델 개발을 하고 있는 김하영입니다.

AI에 관심이 있는 분들이라면, **벡터 임베딩(Vector Embedding)** 에 대해 한 번쯤은 들어보셨을 겁니다.

AI 애플리케이션에서 사용되는 모든 데이터들은 AI 모델을 통해 임베딩되며, 이 임베딩 벡터들 간의 관계를 분석함으로써 분류, 예측, 번역, 요약 등 다양한 태스크를 수행합니다.

우리가 일상 및 업무에서 잘 활용하고 있는 ChatGPT에서도 물론 벡터 임베딩이 사용되고 있답니다.

이처럼 벡터 임베딩은 이미지 처리부터 자연어 처리(NLP), 추천 시스템, 대규모 언어 모델(Large Language Model, LLM) 등 다양한 AI 분야에서 빼놓을 수 없는 핵심 개념 중 하나입니다.

---

### 벡터 임베딩은 무엇인가요?

벡터 임베딩은 텍스트, 이미지, 영상, 오디오 등 다양한 유형의 데이터를 컴퓨터가 이해하고 처리할 수 있도록 **수치 형태로 변환** 하는 방법입니다. 이 변환 과정은 사람이 직접 정의하는 것이 아니라, 데이터를 AI 모델에 입력하여 모델 스스로가 해당 데이터를 의미 있는 벡터로 변환합니다.

그리고 벡터 임베딩을 통해 데이터는 고차원 공간에서 저차원의 벡터로 변환되는데요. 이 과정에서 차원은 축소되면서도, 데이터의 중요한 정보와 패턴은 보존됩니다. 이를 통해 컴퓨터는 데이터를 효과적으로 분석하여, 벡터 간의 유사성 또는 패턴을 파악할 수 있습니다.

![](https://blog.kakaocdn.net/dna/ez978p/btsz9wKDGxb/AAAAAAAAAAAAAAAAAAAAAP1iFFv___h3vMV_Tvpi_tB6S0REoAyh0CpdUn4NOM7x/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=CKQqRNpLuDK2lKZ7KRDDRYFq9zA%3D)

AI 모델을 통해 구조화되지 않은 데이터를 벡터로 변환합니다.

#### 자연어 처리에서의 벡터 임베딩

자연어 처리 분야에서 가장 잘 알려진 벡터 임베딩의 예는 바로 **워드 임베딩(Word Embedding)** 입니다. 워드 임베딩은 각 단어를 고유한 벡터로 표현하여 단어 간의 관계와 의미를 파악합니다. 예를 들어, "king - man + woman" 연산을 수행하면 "queen"에 가까운 결과가 나오게 됩니다. 즉, 벡터 공간에서 단어 간의 의미적 유사성을 수학적 연산을 통해 판단할 수 있는 것입니다. 대표적인 워드 임베딩 모델에는 Word2Vec, BERT, GPT 등이 있습니다.

#### 이미지 처리에서의 벡터 임베딩

이미지 처리 분야에서도 벡터 임베딩은 중요한 역할을 합니다. **CNN(Convolutional Neural Network)** 을 통해 이미지의 픽셀값을 벡터로 변환하며, 이를 통해 이미지에 포함된 다양한 정보와 의미를 보다 추상적인 형태로 표현할 수 있습니다. 이는 객체 검출이나 분류, 유사 이미지 검색 등 다양한 작업에 활용됩니다.

뿐만 아니라, 벡터 임베딩은 추천 시스템, 대규모 언어 모델(LLM), 문서 요약, 감정 분석, 기계 번역, 음성 인식 등 다양한 AI 분야에서 활용되고 있으며, 이러한 임베딩된 데이터를 효과적으로 저장하고 검색하기 위해서는 새로운 데이터 저장 방식이 필요해졌습니다.

![](https://blog.kakaocdn.net/dna/bPi7FW/btsAbaNzaPa/AAAAAAAAAAAAAAAAAAAAAGo8oYROa0EwdGwYviDuVNq6M6IVTiLu_Hk_njQgRJ_z/img.gif?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=zOUn1%2BFx8rXSdcptSY6ZNSOR9xo%3D)

벡터 임베딩을 시각화한 모습. 벡터 공간에서 연관된 벡터들은 서로 가깝게 매핑되어 있습니다.

---

### 벡터 데이터베이스의 등장

Oracle, MySQL과 같은 관계형 데이터베이스는 현재까지도 많은 기업 및 서비스에서 사용되고 있는 데이터 저장 방식으로, 구조화된 정형 데이터를 처리하는 데 효과적입니다. 그러나 비정형 데이터 또는 다차원의 벡터 데이터를 저장하고 관리하는 데는 다음과 같은 한계가 있습니다.

#### 비정형 데이터 저장의 어려움

관계형 데이터베이스는 주로 표(Table) 형태의 구조화된 데이터를 다루는 데 적합합니다. 그러나 AI의 발전으로 텍스트, 이미지, 오디오 등 방대한 양의 비정형 데이터가 넘쳐나게 되었습니다. 이러한 데이터들을 테이블에 저장하는 것은 적합하지 않습니다.

#### 유사성 검색의 한계

관계형 데이터베이스는 쿼리와 완전히 일치하는 행을 찾아 반환하므로, 벡터 간의 유사성을 계산하고 검색하는 기능이 부족합니다. 이로 인해 벡터 데이터를 활용한 유사성 검색이 어려웠습니다.

#### 대용량 데이터 처리의 제약

대규모의 벡터 데이터를 저장하고 검색하는 경우, 관계형 데이터베이스는 성능 문제를 겪을 수 있습니다. 벡터 데이터의 대용량 처리에 최적화되지 않았기 때문입니다.

이러한 한계로부터 벡터 데이터베이스가 등장했습니다. 유사성 검색 데이터베이스라고도 불리는 벡터 데이터베이스는 방대한 양의 다차원 데이터를 벡터 형태로 저장하고 검색할 수 있도록 설계되었습니다. 벡터 임베딩은 **의미상 관련된 항목을 벡터 공간에서 서로 가깝게 매핑** 하기 때문에, 벡터 데이터베이스는 유사성 검색을 신속하게 수행할 수 있습니다. 이처럼 벡터 데이터베이스는 벡터 임베딩은 물론, 유사성 검색이라는 강력한 기능을 제공하며 AI에 최적화된 데이터베이스로 주목받고 있습니다.

---

### 벡터 데이터베이스는 어떻게 동작하나요?

앞서 말씀드린 것처럼, 관계형 데이터베이스는 쿼리와 정확히 일치하는 행을 찾아 반환합니다. 반면, 벡터 데이터베이스에서는 유사도 메트릭(Similarity Metrics)을 적용하여 가장 유사한 벡터를 찾습니다.

벡터 데이터베이스의 일반적인 파이프라인은 다음과 같습니다.

![](https://blog.kakaocdn.net/dna/bCWnyD/btsAamnzdfp/AAAAAAAAAAAAAAAAAAAAAPzNvwsU1m1rZEBs6HWO7D31ocidOcGswSOi7WVDT4M3/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=f0NLaegfqggHZwk43Y%2FndoW9xuc%3D)

**1\. 색인(Indexing):** PQ, LSH, HNSW와 같은 알고리즘을 사용하여 벡터를 색인합니다. 이 단계에서는 더 빠른 검색을 가능하게 하는 데이터 구조에 벡터를 매핑합니다.

**2\. 쿼리:** 유사도 메트릭(코사인 유사도, 유클리디안 거리, 내적 등)을 적용하여 가장 가까운 벡터를 찾습니다.  

- **코사인 유사도(Cosine Similarity)**: 두 벡터 간의 각도를 측정하여 유사성을 판단합니다. 두 벡터가 얼마나 같은 방향으로 향하고 있는지를 나타냅니다. 값은 -1 ~ 1 사이에 있으며, 값이 1에 가까울수록 두 벡터는 유사하고, -1에 가까울수록 반대 방향에 있는 것을 나타냅니다.
- **유클리디안 거리(Euclidean Distance)**: 두 벡터 간의 직선 거리를 측정합니다. 값은 항상 0 이상이며, 두 벡터 간의 거리가 짧을수록 유사성이 높다고 판단합니다.
- **내적(Dot Product)**: 두 벡터 간의 곱셈 연산을 통해 유사성을 측정합니다. 두 벡터가 얼마나 유사한 방향을 가지고 있는지를 나타냅니다. 두 벡터가 유사한 방향을 가지면 양수이고, 반대 방향을 가지면 음수이며, 두 벡터가 직교하면 0입니다.

**3\. 후처리:** 데이터셋에서 최종 최근접 이웃을 검색하고 이를 후처리하여 최종 결과를 반환합니다. 일부 벡터 데이터베이스는 벡터 검색을 하기 전에 필터를 적용할 수 있습니다.  

- **사전 필터링**: 벡터를 검색하기 전에 메타데이터 필터링이 수행됩니다. 이 방식은 검색량을 줄이는 데 도움이 될 수 있습  
	니다. 그러나 메타데이터 필터링 기준에 부합하지 않지만 실제 연관이 있는 결과를 놓칠 수 있으며, 광범위한 메타데이터 필터링으로 인해 추가 오버헤드가 발생하여 쿼리 수행이 느려질 수 있습니다.
- **사후 필터링**: 벡터를 검색한 후에 메타데이터 필터링이 수행됩니다. 이 방식은 연관된 모든 결과를 추출하는 데 도움이 되지만, 검색이 완료된 후 관련 없는 결과를 필터링해야 하므로 추가 오버헤드가 발생하고 쿼리 프로세스가 느려질 수 있습니다.

---

### 벡터 데이터베이스의 종류

대표적인 벡터 데이터베이스로는 파인콘(Pinecone), 위비에이트(Weviate), 크로마(Chroma), 큐드런트(Qdrant), 밀버스(Milvus) 등이 있습니다. 아래는 주요 벡터 데이터베이스를 비교 정리한 표입니다.

![](https://blog.kakaocdn.net/dna/dFenmV/btsz9yn6tg6/AAAAAAAAAAAAAAAAAAAAADKtVcKMH2KpySR3Y2J54Sp5cihTPvgWuSZNY8G4Wg96/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=RsUYAt4jdU6iSl4BN9Uo6v2QOks%3D)

주요 벡터 데이터베이스 비교

보다 세분화된 기준을 바탕으로 벡터 데이터베이스를 비교 정리한 사이트가 있으니, 어떤 데이터베이스를 선택하면 좋을지 고민될 때 참고하시기 바랍니다. ([https://discuss.pytorch.kr/t/2023-picking-a-vector-database-a-comparison-and-guide-for-2023/2625)](https://discuss.pytorch.kr/t/2023-picking-a-vector-database-a-comparison-and-guide-for-2023/2625\))

---

### Chroma를 사용하여 얼굴 검색해 보기

자, 그럼 벡터 DB를 사용해 볼까요?

python 연산을 통한 얼굴 검색과 벡터 DB 쿼리를 통한 얼굴 검색 간의 결과와 속도를 비교해 보겠습니다. 벡터 DB는 여러 후보군 중 간단하게 설치하여 사용할 수 있는 Chroma를 선택하였습니다. 진행 순서는 아래와 같습니다.

1. 얼굴 공개 데이터셋인 LFW 데이터셋에 대해 DeepFace 라이브러리를 통해 벡터 임베딩을 수행합니다.
2. 생성된 임베딩 벡터를 pandas의 데이터프레임에 저장합니다.
3. Chroma DB를 생성하고 컬렉션에 임베딩 벡터를 적재합니다.
4. python 연산을 통해 얼굴 검색을 수행합니다.
5. 벡터 DB의 쿼리를 통해 얼굴 검색을 수행합니다.
6. 두 얼굴 검색의 결과와 속도를 비교합니다.

실습은 Google Colab 또는 Jupyter Notebook 환경에서 하시는 것을 추천드립니다. 여기에서는 Colab을 바탕으로 진행해보겠습니다. 실습에 사용된 전체 코드는 아래 링크를 클릭해주세요.

[https://colab.research.google.com/drive/1OdJLfcGoHSQPYSFR8Gt3l-B0y\_Q3GcHA?usp=sharing](https://colab.research.google.com/drive/1OdJLfcGoHSQPYSFR8Gt3l-B0y_Q3GcHA?usp=sharing "vectordb example.ipynb")

#### 설치

Chroma DB를 설치합니다. 대화형 개발 환경에서는 아래와 같이 매직 명령어(!)를 통해 필요한 라이브러리를 설치할 수 있습니다.

```python
!pip install chromadb
```

#### 모듈 불러오기

코드 실행에 필요한 모듈들을 불러옵니다(import).

```python
import pickle
import chromadb
import pandas as pd
import numpy as np
import cupy as cp

from pathlib import Path
from PIL import Image
```

#### 얼굴 임베딩 벡터 불러오기

사전에 LFW 데이터셋을 DeepFace의 ArcFace 모델을 사용하여 벡터 임베딩한 후, 파일로 저장해 두었습니다.

DeepFace 사용 방법은 이전에 포스팅한 [2023.08.04 - \[Tech\] - 오픈소스를 활용한 딥러닝 얼굴인식 맛보기 (Feat. DeepFace)](https://kbank-recruit.tistory.com/31)

글을 참고해 주시길 바랍니다.

벡터 임베딩 파일은 아래 링크를 클릭하여 다운로드할 수 있습니다.

[https://drive.google.com/file/d/1x2uXZjpJPdXzYF5pmtVoO0oAxi3UKE0s/view?usp=sharing](https://drive.google.com/file/d/1x2uXZjpJPdXzYF5pmtVoO0oAxi3UKE0s/view?usp=sharing "lfw face dataset")

구글 드라이브에 벡터 임베딩 파일을 업로드한 후, 아래 코드로 불러옵니다. 경로는 실제 업로드한 위치대로 변경해 주시면 됩니다.

데이터프레임은 총 13,233개의 행으로 구성되어 있으며, 각 컬럼 정보는 다음과 같습니다.

- id: 각 인물의 ID
- name: 각 인물의 이름
- path: 이미지 저장 경로 (중복 값이 없는 unique 값)
- embedding: (ArcFace를 통해 임베딩된) 512차원의 얼굴 임베딩 벡터
```python
# lfw 벡터 임베딩 데이터셋 로드
with open( '/content/drive/MyDrive/lfw_face_dataset', 'rb' ) as file:
    df = pickle.load(file)

# 데이터 확인
df.tail()
```

#### Chroma 클라이언트 생성

클라이언트를 생성합니다. path는 데이터베이스가 저장되는 경로입니다.

```python
# Chroma 클라이언트 생성
client = chromadb.PersistentClient(path='/content/drive/MyDrive/chromadb')
```

#### 컬렉션 생성

이제 컬렉션을 생성합니다. 컬렉션은 벡터 임베딩, 문서, 메타데이터를 저장하는 공간입니다. 관계형 데이터베이스의 테이블이라고 생각하시면 됩니다.

hnsw:space는 유사도 메트릭을 설정하기 위한 키로, 해당 옵션의 default 값은 'l2'입니다. 아래 세 가지 중 하나를 선택하여 사용할 수 있습니다.

- **'cosine'**: 코사인 유사도
- **'l2'**: Squared L2 (유클리디안 거리, default 값)
- **'IP'**: 내적 (Inner Product)
```python
# 컬렉션 생성
collection = client.get_or_create_collection(
    name='lfw_faces',
    metadata={'hnsw:space': 'cosine'})

# 컬렉션 조회
collection.get()
```

#### 데이터를 컬렉션에 추가

**.add()** 메서드를 사용하여 데이터를 컬렉션에 추가할 수 있습니다.

아래 코드와 같이 for문을 수행하면서 데이터를 하나씩 추가할 수도 있고, 리스트에 모든 데이터를 입력하여 한 번에 추가할 수도 있습니다.

추가 시 몇 가지 유의 사항이 있습니다.

- **각 임베딩에는 고유한 id가 매핑** 되어야 합니다. 기존 id를 추가하려고 시도하면, 처음 값만 저장됩니다.
- id는 **string 타입** 만 가능합니다.
- 컬렉션 내의 **모든 embedding은 차원이 동일** 해야 합니다. 만약 다를 경우, 추가되지 않고 예외가 발생합니다.
```python
# collection에 추가
for i in range(len(df)):
    row = df.iloc[i]
    face_name = row['name']
    face_path = row['path']
    face_id = Path(face_path).stem # 파일명을 id로 사용함 (중복되지 않는 값을 id로 써야 함)
    face_embedding = row['embedding']

    collection.add(
        embeddings=[face_embedding],
        metadatas=[{
        'name': face_name,
        'path': face_path
    }],
        ids=[face_id]
    )
```

#### 쿼리 수행 (얼굴 검색)

**.query()** 메서드를 사용하여 쿼리할 수 있습니다.

query\_embeddings와 가장 가까운 항목을 **n\_results 수만큼 순서대로 반환** 합니다.

```python
# 검색할 얼굴 랜덤 선택
rand_num = random.randint(0, len(df))
test_emb = df.iloc[rand_num]['embedding']
test_id = df.iloc[rand_num]['path']
print("rand_num: {}, id: {}".format(rand_num, test_id))

# 가장 가까운 항목 조회
query_result = collection.query(
    query_embeddings=[test_emb],
    n_results=1
)
```

#### 속도 비교

python 연산과 벡터 DB 쿼리 연산과의 속도를 비교해 보았습니다. 실행 시간은 timeit 라이브러리를 통해 측정하고 비교하였습니다.

| **n\_results** | **NumPy 연산** | **CuPy 연산** | **벡터 DB 쿼리 연산** | **Cupy 연산과의 속도 차이** |
| --- | --- | --- | --- | --- |
| **1** | 1,500ms | 518ms | 3.01ms | **약 172배** |
| **5** | 1,610ms | 559ms | 3.39ms | **약 157배** |
| **10** | 1,830ms | 762ms | 4.95ms | **약 130배** |

위 표에서 볼 수 있듯이, CuPy는 NumPy에 비해 효율적으로 GPU 가속을 활용하여 계산하므로 더 빠른 결과를 제공합니다.

그러나 벡터 DB 쿼리 연산은 ANN(Approximate Nearest Neighbor) 알고리즘을 사용하므로, NumPy 및 CuPy 연산에 비해 매우 빠른 결과를 제공합니다.

---

### 마치며

AI 기술의 발전과 함께 벡터 임베딩과 효과적으로 상호작용할 수 있는 수단으로 벡터 데이터베이스가 등장했습니다. 벡터 데이터베이스는 비정형 데이터와 다차원의 벡터 데이터를 저장 및 검색, 분석하는 데 매우 유용합니다.

벡터 데이터베이스는 기존의 관계형 데이터베이스와는 다른 관점에서 데이터를 처리하며, AI 애플리케이션에서 벡터 데이터를 효과적으로 다룰 수 있도록 지원합니다. 유사도 메트릭을 사용하여 벡터 간의 관계를 파악하고, 최적화된 알고리즘과 데이터 구조를 활용하여 대용량 데이터셋에서도 빠르고 정확한 결과를 제공합니다.

벡터 데이터베이스는 다양한 분야에서 더 나은 결과와 빠른 인사이트를 제공하며 앞으로도 그 역할이 더 커질 것으로 기대합니다.

### 참고자료

- [https://medium.com/geekculture/vector-databases-taking-data-revolution-to-the-next-level-4a0faa437b2c](https://medium.com/geekculture/vector-databases-taking-data-revolution-to-the-next-level-4a0faa437b2c)
- [https://benchmark.vectorview.ai/vectordbs.html?utm\_source=pytorchkr](https://benchmark.vectorview.ai/vectordbs.html?utm_source=pytorchkr)
- [https://medium.com/@tenyks\_blogger/vector-databases-unlock-the-potential-of-your-data-5bd4950bd72](https://medium.com/@tenyks_blogger/vector-databases-unlock-the-potential-of-your-data-5bd4950bd72)
- [https://www.serendipidata.com/posts/visualizing-high-dimensional-data](https://www.serendipidata.com/posts/visualizing-high-dimensional-data)
- [https://docs.trychroma.com/usage-guide](https://docs.trychroma.com/usage-guide)

**케이뱅크와 함께 하고 싶다면 🚀**

[저작자표시 비영리 (새창열림)](https://creativecommons.org/licenses/by-nc/4.0/deed.ko)

#### '' 카테고리의 다른 글

| [생성형AI/LLM/ChatGPT의 짧은 역사와 이해 그리고 금융 적용 - 1부](https://blog.kbanknow.com/68) (0) | 2023.11.29 |
| --- | --- |
| [딥러닝(Deep Learning) 기반 개인화 추천시스템](https://blog.kbanknow.com/67) (1) | 2023.11.15 |
| [Application Modernization-MSA](https://blog.kbanknow.com/52) (0) | 2023.09.06 |
| [Unity로 술래잡기 게임만들기](https://blog.kbanknow.com/51) (1) | 2023.09.06 |
| [코딩 없이 ChatGPT를 이용해서 웹페이지 만들기](https://blog.kbanknow.com/50) (0) | 2023.09.06 |

### TAG

, , , , , ,