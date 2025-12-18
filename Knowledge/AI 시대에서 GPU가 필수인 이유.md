---
title: AI 시대에서 GPU가 필수인 이유
source: https://blogs.nvidia.co.kr/blog/why-gpus-are-great-for-ai/
author:
  - "[[NVIDIA Korea]]"
published: 2023-12-11
created: 2025-06-12
description: 칩, 시스템, 그리고 소프트웨어의 기능으로 인해 엔비디아 GPU는 수백만 명이 즐기는 성능과 효율성을 갖춘 머신러닝에 이상적인 제품입니다.
tags:
  - clippings
---
- [Email](https://blogs.nvidia.co.kr/blog/why-gpus-are-great-for-ai/#ea-share-count-email)

GPU는 생성형 AI 시대의 기반이기 때문에 인공 지능의 희토류 금속, 심지어 금이라고도 불립니다.

세 가지 기술적 이유와 여러 가지 이야기가 그 이유를 설명할 수 있는데요. 각 이유에는 여러 가지 측면을 살펴볼 가치가 있지만, 개략적으로 설명하면 다음과 같습니다:

- GPU는 병렬 처리 방식입니다.
- GPU 시스템은 슈퍼컴퓨팅 수준까지 확장됩니다.
- AI용 GPU 소프트웨어 스택이 광범위하고 깊이가 있습니다.

그 결과 GPU는 CPU보다 더 빠르고 [더 높은 에너지 효율](https://www.nvidia.com/en-us/glossary/energy-efficiency/) 로 기술적 계산을 수행하게 됩니다. 즉, [가속화된 컴퓨팅](https://blogs.nvidia.com/blog/what-is-accelerated-computing/) 을 사용하는 다양한 애플리케이션에서 AI 훈련 및 추론을 위한 선도적인 성능을 제공할 뿐만 아니라 다양한 이점을 제공합니다.

스탠퍼드의 인간 중심 AI 그룹(Human-Centered AI group)은 최근 [AI에 관한 보고서](https://aiindex.stanford.edu/wp-content/uploads/2023/04/HAI_AI-Index-Report_2023.pdf) 에서 몇 가지 맥락을 제시했습니다. 2003년 이후 GPU 성능은 “약 7,000배 증가”했으며, 성능당 가격은 “5,600배 더 높아졌다”고 보고했습니다.

![2023년 보고서에서는 GPU 성능과 가격 대비 성능이 가파르게 상승하는 모습을 포착했습니다.](https://blogs.nvidia.co.kr/wp-content/uploads/sites/16/2023/12/Stanford-2023-AI-report-GPU-performance-final-1280x627.jpg.webp)

2023년 보고서에서는 GPU 성능과 가격 대비 성능이 가파르게 상승하는 모습을 포착했습니다.

이 보고서는 AI 발전을 측정하고 예측하는 독립 연구 그룹인 Epoch의 분석을 인용하기도 했는데요.

“GPU는 머신러닝 워크로드를 가속화하는 데 있어 지배적인 컴퓨팅 플랫폼이며, 지난 5년 동안 가장 큰 모델의 대부분은(전부는 아니지만) GPU에서 훈련되었습니다… \[따라서\] 최근 AI의 발전에 중심적으로 기여했습니다.”라고 Epoch는 자사 [사이트](https://epochai.org/blog/trends-in-gpu-price-performance) 를 통해 밝혔습니다.

미국 정부를 위해 AI 기술을 평가한 [2020년 연구](https://cset.georgetown.edu/wp-content/uploads/AI-Chips%E2%80%94What-They-Are-and-Why-They-Matter.pdf) 에서도 비슷한 결론을 도출했습니다.

“\[최첨단\] AI 칩은 생산 및 운영 비용을 계산할 때 선도적인 노드 CPU보다 1 ~ 3 배 더 비용 효율적일 것으로 예상합니다.”라고 말했습니다.

엔비디아의 수석 과학자인 Bill Dally는 반도체 및 시스템 엔지니어들의 연례 모임인 Hot Chip [키노트](https://blogs.nvidia.com/blog/hot-chips-dally-research/) 에서 엔비디아 GPU는 지난 10년 동안 AI 추론 성능을 1,000배 향상시켰다고 말했습니다.

**챗GPT로 촉발된 확산**

챗GPT는 GPU가 AI에 얼마나 훌륭한지 보여주는 강력한 예시입니다. 수천 개의 엔비디아 GPU에서 학습 및 실행되는 [대규모 언어 모델(LLM)](https://blogs.nvidia.co.kr/blog/what-are-large-language-models-used-for/) 은 1억 명 이상의 사용자가 사용하는 생성형 AI 서비스를 실행합니다.

2018년에 출시된 이래로 AI의 업계 표준 벤치마크가 된 [MLPerf](https://www.nvidia.com/ko-kr/data-center/resources/mlperf-benchmarks/) 는 AI 훈련과 추론 모두에서 엔비디아 GPU의 선도적인 성능을 자세히 설명하는 수치를 제공해 왔습니다.

예를 들어, [엔비디아 그레이스 호퍼 슈퍼칩(NVIDIA Grace Hopper Superchips)](https://www.nvidia.com/ko-kr/data-center/grace-hopper-superchip/) 은 추론 테스트 분의 [최신 라운드](https://blogs.nvidia.co.kr/blog/grace-hopper-inference-mlperf/) 들을 휩쓸었습니다. 이 테스트 이후 출시된 추론 소프트웨어인 [엔비디아 텐서RT-LLM](https://developer.nvidia.com/blog/nvidia-tensorrt-llm-supercharges-large-language-model-inference-on-nvidia-h100-gpus/) 은 최대 8배의 성능 향상과 5배 이상의 에너지 사용 및 총소유비용 절감을 제공합니다. 실제로 엔비디아 GPU는 2019년 벤치마크가 발표된 이후 모든 MLPerf 훈련 및 추론 테스트 라운드에서 우승을 차지해왔습니다.

2월에는 금융 서비스 업계의 핵심 기술 성능 척도인 STAC-ML 마켓 벤치마크에서 가장 까다로운 모델에 대해 초당 수천 번의 추론을 수행하며 추론 부문에서 [최고의 결과를 제공](https://blogs.nvidia.com/blog/stac-ml-inference-gpu/) 했습니다.

레드햇 소프트웨어 엔지니어링 팀은 이에 대해 자사의 [블로그](https://developers.redhat.com/articles/2022/11/21/why-gpus-are-essential-computing) 에 다음과 같이 간결하게 설명했습니다. “GPU는 인공 지능의 기반이 되었습니다.”

**AI 내부 구조**

GPU와 AI가 강력한 조합을 이루는 이유를 간단히 살펴보시기 바랍니다.

뉴럴 네트워크라고도 하는 AI 모델은 본질적으로 선형 대수 방정식을 겹겹이 쌓아 만든 수학적 라자냐(lasagna)와 같습니다. 각 방정식은 한 데이터 조각이 다른 데이터 조각과 연관될 가능성을 나타냅니다.

GPU는 수천 개의 코어로 구성된 작은 연산기가 병렬로 작동하여 AI 모델을 구성하는 수학을 조각조각 잘라냅니다. 이것이 바로 AI 컴퓨팅이 작동하는 방식입니다.

**고도로 튜닝된 텐서 코어**

시간이 지남에 따라 엔비디아의 엔지니어들은 진화하는 AI 모델의 니즈에 맞게 GPU 코어를 조정해 왔습니다. 최신 GPU에는 매트릭스 수학 뉴럴 네트워크가 사용하는 처리를 위한 1세대 설계보다 60배 더 강력한 [텐서 코어가](https://www.nvidia.com/ko-kr/data-center/tensor-cores/) 포함되어 있습니다.

또한, [엔비디아 호퍼 텐서 코어 GPU(NVIDIA Hopper Tensor Core GPU)](https://www.nvidia.com/ko-kr/data-center/h100/) 에는 생성형 AI를 생성한 뉴럴 네트워크의 한 종류인 [트랜스포머 모델](https://blogs.nvidia.co.kr/blog/h100-transformer-engine/) 을 처리하는 데 필요한 최적의 정밀도로 자동 조정할 수 있는 트랜스포머 엔진이 포함되어 있습니다.

그 과정에서 각 GPU 세대는 더 많은 메모리와 최적화된 기술을 탑재하여 전체 AI 모델을 단일 GPU 또는 GPU 세트에 저장할 수 있게 되었습니다.

**모델 성장, 시스템 확장**

AI 모델의 복잡성은 매년 무려 10배씩 증가하고 있습니다.

현재 최신 LLM인 GPT4는 수학적 밀도를 나타내는 척도인 파라미터가 1조 개가 넘습니다. 이는 2018년에 널리 사용되던 LLM의 매개변수가 1억 개 미만이었던 것에 비해 증가한 수치입니다.

![](https://blogs.nvidia.co.kr/wp-content/uploads/sites/16/2023/12/1000x-AI-inferrence-gain-in-10-years-1280x723.jpg.webp)

최근 (Hot Chips에서 열린 강연에서 엔비디아 수석 과학자 Bill Dally는 지난 10년 동안 AI 추론에서 단일 GPU 성능이 1,000배 확장된 방법을 설명했습니다.

GPU 시스템은 이러한 도전에 동참하여 보조를 맞춰왔습니다. 빠른 [NV링크](https://blogs.nvidia.co.kr/blog/what-is-nvidia-nvlink/) 인터커넥트와 [엔비디아 퀀텀 인피니밴드 네트워크(NVIDIA Quantum InfiniBand networks)](https://www.nvidia.com/ko-kr/networking/quantum2/) 덕분에 슈퍼컴퓨터로 확장할 수 있습니다.

예를 들어, 대용량 메모리 AI 슈퍼컴퓨터인 [DGX GH200](https://www.nvidia.com/ko-kr/data-center/dgx-gh200/) 은 144테라바이트의 공유 메모리를 갖춘 단일 데이터센터 크기의 GPU에 최대 256개의 엔비디아 GH200 그레이스 호퍼 슈퍼칩을 결합합니다.

각 GH200 슈퍼칩은 72개의 Arm Neoverse CPU 코어와 4페타플롭의 AI 성능을 갖춘 단일 서버입니다. 새로운 [4웨이 그레이스 호퍼(Grace Hopper) 시스템 구성](https://blogs.nvidia.co.kr/blog/gh200-grace-hopper-superchip-powers-ai-supercomputers-2/) 은 단일 컴퓨팅 노드에 무려 288개의 Arm 코어와 16페타플롭의 AI 성능, 최대 2.3테라바이트의 고속 메모리를 탑재합니다.

또한 11월에 발표된 [엔비디아 H200 텐서 코어 GPU](https://www.nvidia.com/ko-kr/data-center/h200/) 는 최대 288기가바이트의 최신 HBM3e 메모리 기술을 탑재하고 있습니다.

**소프트웨어의 영역 확장**

2007년 이후 GPU 소프트웨어는 딥테크 기능부터 고급 애플리케이션에 이르기까지 AI의 모든 측면을 지원하기 위해 발전해 왔습니다.

엔비디아 AI 플랫폼에는 수백 개의 소프트웨어 라이브러리와 앱이 포함되어 있습니다. CUDA 프로그래밍 언어와 딥 러닝용 cuDNN-X 라이브러리는 개발자가 자체 생성 AI 모델에서 추론을 구축, 커스터마이징 및 실행할 수 있는 프레임워크인 [엔비디아 네모(NVIDIA NeMo)](https://www.nvidia.com/ko-kr/ai-data-science/generative-ai/nemo-framework/) 와 같은 소프트웨어를 개발할 수 있는 기반을 제공합니다.

이러한 요소 중 상당수는 소프트웨어 개발자들이 즐겨 사용하는 오픈 소스 소프트웨어로 제공됩니다. 이 중 100개 이상의 요소는 완전한 보안과 지원이 필요한 기업을 위해 [엔비디아 AI 엔터프라이즈](https://www.nvidia.com/ko-kr/data-center/products/ai-enterprise/) 플랫폼에 패키지화되어 있습니다. 점점 더 많은 주요 클라우드 서비스 제공업체에서 [엔비디아 DGX 클라우드](https://www.nvidia.com/ko-kr/data-center/dgx-cloud/) 의 API 및 서비스로도 제공됩니다.

엔비디아GPU용 최신 AI 소프트웨어 업데이트 중 하나인 [SteerLM](https://blogs.nvidia.co.kr/blog/customize-ai-models-steerlm/) 을 통해 사용자는 추론 중에 모델을 파인튜닝할 수 있습니다.

**2008년 70배의 속도 향상**

성공 사례는 2008년 당시 스탠퍼드 연구원이었던 AI 선구자인 Andrew Ng의 논문으로 거슬러 올라갑니다. 세 명으로 구성된 그의 팀은 두 대의 엔비디아 지포스(NVIDIA GeForce) GTX 280 GPU를 사용하여 1억 개의 매개변수가 있는 AI 모델을 처리하는 CPU보다 70배 빠른 속도를 달성하여 몇 주가 걸리던 작업을 단 하루 만에 완료했습니다.

“최신 그래픽 프로세서는 멀티코어 CPU의 연산 능력을 훨씬 능가하며, 딥 비지도 학습 방법의 적용 가능성을 혁신할 수 있는 잠재력을 가지고 있습니다.”라고 연구팀은 보고했습니다.

![Andrew Ng은 GTC 2015 강연에서 AI에 GPU를 사용한 자신의 경험을 설명했습니다.](https://blogs.nvidia.co.kr/wp-content/uploads/sites/16/2023/12/Andrew-Ng-GTC-2015-scaling-1280x507.jpg.webp)

Andrew Ng은 GTC 2015 강연에서 AI에 GPU를 사용한 자신의 경험을 설명했습니다.

[2015년 엔비디아 GTC 세션](https://video.ibm.com/recorded/60113824/highlight/619422) 에서 Ng은 구글 브레인과 바이두에서 더 큰 규모의 모델을 실행하면서 작업 규모를 확장하기 위해 더 많은 GPU를 계속 사용하게 된 과정을 설명했습니다. 이후에는 온라인 교육 플랫폼인 Coursera를 설립하여 수십만 명의 AI 학생들을 가르쳤습니다.

Ng은 현대 AI의 대부 중 한 명인 Geoff Hinton을 자신의 영향을 받은 사람 중 하나로 꼽습니다. 그는 GTC 세션에서 “Geoff Hinton에게 가서 쿠다(CUDA)를 확인해 보라며 더 큰 뉴럴 네트워크를 구축하는 데 도움이 될 수 있다고 말했던 기억이 납니다.”라고 말했습니다.

토론토 대학교 교수는 이 말을 퍼뜨렸습니다. “2009년에 NIPS(현 NeurIPS)에서 약 1,000명의 연구원들에게 GPU가 머신 러닝의 미래가 될 것이므로 모두 GPU를 구입해야 한다고 말했던 강연이 기억납니다.”라고 Hinton은 한 언론 보도에서 말했습니다.

GPU로 빠르게 전환하기

AI의 발전은 전 세계 경제에 파급력을 미칠 것으로 예상되고 있습니다.

지난 6월에 발표된 맥킨지 보고서는 은행, 헬스케어, 소매업과 같은 산업에서 분석한 63개의 활용 사례를 통해 생성형 AI가 연간 2조 6천억 달러에서 4조 4천억 달러에 해당하는 가치를 창출할 수 있다고 예했습니다. 따라서 스탠퍼드의 2023년 AI 보고서에서 대다수의 비즈니스 리더가 AI에 대한 투자를 늘릴 것으로 예상한다고 밝힌 것은 놀라운 일이 아닙니다.

현재 40,000개 이상의 기업이 AI 및 가속 컴퓨팅을 위해 엔비디아GPU를 사용하고 있으며, 4백만 명의 개발자로 구성된 글로벌 커뮤니티를 보유하고 있습니다. 이들은 함께 과학, 헬스케어, 금융 및 거의 모든 산업을 발전시키고 있습니다.

최근의 성과 중에는 대기 중 이산화탄소를 차단하여 기후 변화를 완화하기 위해 AI를 사용하여 무려 70만 배의 속도 향상을 달성한 사례가 있습니다(아래 동영상 참조). 이는 엔비디아가 GPU의 성능을 AI와 그 너머에 적용한 여러 가지 방법 중 하나입니다.

![](https://www.youtube.com/watch?v=u-M5LQvx1cQ)