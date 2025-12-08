# 로또 번호 생성 기능 구현

## 📌 프로젝트 개요
이 프로젝트는 웹 환경에서 간단하게 **로또 번호를 생성해주는 기능**을 구현하기 위해 진행되었습니다.  
버튼을 클릭하면 1~45 사이의 숫자 중 **중복 없이 6개의 랜덤 번호**가 생성되며, GitHub의 Issue–Branch–PR–Merge의 협업 과정을 실제처럼 경험하는 데 목적이 있습니다.

---

## 🎯 기능 소개
- 버튼 클릭 시 로또 번호 6개 랜덤 생성  
- 1~45 범위 내에서 **중복 없는 번호** 생성  
- 간단하고 직관적인 UI 제공  
- GitHub Pages를 통한 웹 배포

---

## 🖥️ 사용 방법
1. GitHub Pages로 배포된 웹페이지에 접속합니다.  
2. **“번호 생성” 버튼**을 클릭합니다.  
3. 화면에 랜덤 로또 번호 6개가 표시됩니다.  
4. 새 번호가 필요하면 다시 버튼을 클릭합니다.

---

## 👥 팀원 소개
| 이름 | 역할 |
|------|------|
| **장다빈** | 코드 리뷰 & PR Merge 승인, README 작성, GitHub Pages 설정 |
| **진서연** | 기능 개발, Issue 생성, 첫 PR 작성, 프로젝트 구조 설계 |

---

## 🏷️ 버전 정보 (Milestone)
- **v1.0**  
  - 로또 번호 생성 기능 구현 완료  
  - 기본 UI 구성  
  - README 및 협업 워크플로우 작성  
  - Issue/PR 흐름 적용

---

## 🔀 Issue / PR Workflow 설명
이 프로젝트는 GitHub 협업 방식인 **Issue → Branch → Pull Request → Review → Merge** 흐름을 적용하여 개발되었습니다.

1. **Issue 생성**  
   - 구현해야 할 작업들을 Issue(#1, #4, #5, #7)로 분리하여 관리했습니다.

2. **Branch 생성**  
   - 각 기능 또는 문서 업데이트는 개별 브랜치에서 진행했습니다.  
   - 예: `feature/lotto-generator`, `docs/readme-update` 등

3. **PR(Pull Request) 작성**  
   - 구현이 완료된 브랜치에서 main 브랜치로 PR을 생성했습니다.  
   - PR 내용에는 작업 요약(Summary), 변경 사항(Changes), 관련 Issue 번호(Closes #)를 포함했습니다.

4. **코드 리뷰 & 승인(Approve)**  
   - 팀원이 작성한 코드를 PR에서 Review → Approve 버튼으로 승인했습니다.

5. **Merge 과정**  
   - Approve 후 **Merge pull request** 버튼을 눌러 main 브랜치에 병합했습니다.

6. **Issue 자동 종료**  
   - PR 본문에  
     ```
     Closes #1
     Closes #4
     Closes #5
     Closes #7
     ```  
     를 포함하여, Merge 시 자동으로 해당 Issue들이 Close되도록 설정했습니다.

---

## 📝 Retrospective (회고)
이번 프로젝트를 통해 GitHub의 Issue–Branch–PR–Merge 과정을 실제로 적용해보며 협업의 전체 흐름을 이해할 수 있었습니다.  
특히 PR 승인을 통한 코드 리뷰 과정과 GitHub Pages 배포 경험은 실전 웹 개발 프로젝트와 매우 유사하여 큰 도움이 되었습니다.  
작은 기능이지만, 역할 분담과 작업 흐름을 적용해보며 팀 단위 개발이 어떻게 이루어지는지 체감할 수 있는 경험이었습니다.
