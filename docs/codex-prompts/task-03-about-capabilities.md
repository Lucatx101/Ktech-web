# KTECH-WEB — CODEX TASK 03  
## Build About + Five Core Capabilities

Làm việc trực tiếp bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Documents/Ktech-web
```

Branch bắt buộc:

```text
main
```

Không tạo branch mới.  
Không chuyển branch.  
Không commit hoặc push trong task này.

# Mục tiêu

Tiếp tục xây dựng homepage website corporate của **Ktech Việt Nam**.

Header và Hero đã được triển khai, review, commit và push. Trong task này:

- không redesign Header;
- không redesign Hero;
- không thực hiện vòng polish typography/logo/spacing của Header và Hero;
- chỉ chỉnh Header nếu cần nối đúng anchor link tới section mới.

Xây dựng hai section tiếp theo:

1. **About Ktech**
2. **Five Core Capabilities**

Chưa triển khai trong task này:

- Direct Manufacturing Capability;
- Contact CTA;
- Footer;
- animation library;
- final visual polish.

---

# 1. Xác minh repository trước khi chỉnh sửa

Chạy:

```bash
pwd
git status
git branch --show-current
git log --oneline -5
git remote -v
```

Yêu cầu:

- `pwd` phải là `/Users/lucatxtruong/Documents/Ktech-web`;
- branch hiện tại phải là `main`;
- kiểm tra working tree trước khi sửa.

Nếu repository hoặc branch không đúng, dừng lại và báo rõ. Không chỉnh sửa file.

Sau đó audit cấu trúc hiện tại:

```bash
find src -maxdepth 4 -type f | sort
```

Review tối thiểu:

- `src/app/[locale]/`;
- homepage composition;
- Header và Hero hiện tại;
- localization dictionaries;
- content types;
- `src/content/media.ts`;
- design tokens;
- `globals.css`;
- existing UI và layout components;
- cách project đang dùng `next/image`;
- cách routing VI/EN đang hoạt động.

Giữ nguyên architecture và conventions hiện có.

Không chỉnh sửa bất kỳ file nào trong:

```text
assets/source-approved/
```

---

# 2. Technical requirements

Project hiện tại sử dụng:

- Next.js App Router;
- React;
- TypeScript strict;
- Tailwind CSS 4;
- `src/` directory;
- Server Components by default;
- bilingual routing:
  - `/vi`
  - `/en`.

Yêu cầu implementation:

- không thêm dependency mới nếu không thực sự cần;
- localized content phải nằm trong dictionaries hoặc typed content, không hardcode trực tiếp trong visual component;
- semantic HTML;
- accessibility hợp lý;
- visible focus state nếu có interactive element;
- responsive desktop, tablet và mobile;
- dùng `next/image`;
- dùng media manifest hiện có nếu phù hợp;
- hạn chế layout shift;
- không tạo fake link hoặc button tới page chưa tồn tại;
- không tạo generic abstraction nếu chưa thực sự cần;
- không refactor rộng ngoài scope;
- không tạo claim marketing mới;
- không tự tạo số liệu, khách hàng, chứng nhận, đối tác, dự án hoặc kết quả chưa được xác minh.

---

# 3. Visual direction

Website là **corporate profile website**, không phải:

- e-commerce;
- retail website;
- online catalog.

Brand direction:

```text
Industrial Intelligence
```

Website cần thể hiện:

- doanh nghiệp công nghiệp B2B đáng tin cậy;
- năng lực kỹ thuật thực tế;
- engineering;
- manufacturing;
- system integration;
- restrained;
- modern;
- premium nhưng không luxury.

Color direction:

- deep navy;
- technology blue;
- graphite;
- white;
- light grey;
- red chỉ dùng như minor accent nếu hệ thống hiện tại đã sử dụng.

Tránh:

- neon;
- cyberpunk;
- excessive sci-fi;
- hologram;
- glassmorphism;
- heavy gradients;
- heavy shadows;
- generic startup design;
- retail-style cards;
- overly rounded cards;
- decorative dashboards;
- animation không cần thiết.

Slogan cốt lõi của thương hiệu vẫn là:

```text
Understand the universe
```

Không tạo thêm slogan hoặc headline mang tính thương hiệu cạnh tranh với slogan này.

---

# 4. Section A — About Ktech

Thêm section:

```html
id="about"
```

## Mục tiêu

Giới thiệu Ktech là doanh nghiệp kỹ thuật – công nghệ tích hợp của Việt Nam, có năng lực trực tiếp về:

- R&D;
- engineering design;
- manufacturing;
- system integration.

Section này cần ngắn gọn, rõ vai trò doanh nghiệp và không biến thành một company-history section dài.

## Layout đề xuất

Desktop:

- editorial two-column layout;
- bên trái:
  - eyebrow;
  - heading;
- bên phải:
  - hai đoạn nội dung ngắn;
  - capability chain gồm 4 bước.

Capability chain:

1. R&D
2. Engineering Design
3. Manufacturing
4. System Integration

Bốn bước phải thể hiện một chuỗi năng lực liên tục, không phải bốn feature cards rời rạc.

Tablet/mobile:

- stack theo chiều dọc;
- giữ hierarchy rõ ràng;
- không tạo khoảng trống quá lớn.

## Nội dung tiếng Việt

Eyebrow:

```text
VỀ KTECH
```

Heading:

```text
Từ ý tưởng kỹ thuật đến giải pháp công nghiệp thực tế
```

Paragraph 1:

```text
Thành lập năm 2015, Ktech Việt Nam là doanh nghiệp kỹ thuật – công nghệ tích hợp, trực tiếp thực hiện nghiên cứu và phát triển, thiết kế kỹ thuật, chế tạo và tích hợp hệ thống cho doanh nghiệp và sản xuất công nghiệp.
```

Paragraph 2:

```text
Ktech tập trung vào những giải pháp có tính ứng dụng, khả năng triển khai và giá trị vận hành rõ ràng.
```

Capability chain labels:

```text
Nghiên cứu & Phát triển
Thiết kế kỹ thuật
Chế tạo
Tích hợp hệ thống
```

## Nội dung tiếng Anh

Eyebrow:

```text
ABOUT KTECH
```

Heading:

```text
From engineering ideas to practical industrial solutions
```

Paragraph 1:

```text
Established in 2015, Ktech Việt Nam is an integrated engineering and technology enterprise with direct capabilities in research and development, engineering design, manufacturing and system integration for businesses and industrial production.
```

Paragraph 2:

```text
Ktech focuses on practical solutions with clear implementation feasibility and operational value.
```

Capability chain labels:

```text
Research & Development
Engineering Design
Manufacturing
System Integration
```

## Visual requirements

- dùng white hoặc light-grey background để tạo chuyển tiếp rõ từ dark Hero;
- typography mạnh nhưng restrained;
- generous whitespace;
- alignment chính xác;
- có thể dùng subtle technical line, numbering hoặc blue marker nhỏ;
- không dùng icon generic nếu không tăng khả năng hiểu;
- không dùng glow, gradient text hoặc decorative sci-fi notation.

---

# 5. Section B — Five Core Capabilities

Thêm section:

```html
id="capabilities"
```

## Mục tiêu

Trình bày năm nhóm năng lực cốt lõi của Ktech bằng năm ảnh capability đã được duyệt và xử lý sẵn trong repository.

Đây là presentation về năng lực doanh nghiệp, không phải product cards.

## Section heading — Vietnamese

Eyebrow:

```text
NĂNG LỰC CỐT LÕI
```

Heading:

```text
Năng lực tích hợp từ dữ liệu đến sản xuất
```

Introduction:

```text
Ktech kết hợp công nghệ, kỹ thuật và năng lực sản xuất trực tiếp để phát triển các giải pháp phù hợp với nhu cầu vận hành thực tế của doanh nghiệp.
```

## Section heading — English

Eyebrow:

```text
CORE CAPABILITIES
```

Heading:

```text
Integrated capabilities from data to production
```

Introduction:

```text
Ktech combines technology, engineering and direct manufacturing capabilities to develop solutions for real operational requirements.
```

---

# 6. Capability content

## Capability 01 — AI for Enterprise

Media mapping:

```text
capability-ai-enterprise-v1
```

Vietnamese title:

```text
AI cho doanh nghiệp
```

Vietnamese description:

```text
Tích hợp dữ liệu quản trị và vận hành; phân tích sản xuất, chuỗi cung ứng và dữ liệu tài chính; dự báo, giám sát hiệu suất và hỗ trợ ra quyết định.
```

English title:

```text
AI for Enterprise
```

English description:

```text
Integration of management and operational data; production, supply-chain and financial data analysis; forecasting, performance monitoring and decision support.
```

Không dùng cụm từ:

```text
investment advisory
```

---

## Capability 02 — Automation and Special-Purpose Machinery

Media mapping:

```text
capability-automation-special-machinery-v1
```

Vietnamese title:

```text
Tự động hóa và máy chuyên dụng
```

Vietnamese description:

```text
Thiết kế và tích hợp hệ thống tự động hóa, robot công nghiệp, robot hàn, tay máy và máy chuyên dụng theo yêu cầu sản xuất cụ thể.
```

English title:

```text
Automation and Special-Purpose Machinery
```

English description:

```text
Design and integration of industrial automation systems, welding robots, robotic arms and special-purpose machinery for specific production requirements.
```

---

## Capability 03 — Precision CNC Machining

Media mapping:

```text
capability-precision-cnc-v1
```

Vietnamese title:

```text
Gia công CNC chính xác
```

Vietnamese description:

```text
Gia công nhôm, hợp kim, nhựa kỹ thuật, composite và vật liệu kỹ thuật cho vỏ máy, tấm, khối, đồ gá và các chi tiết cơ khí chính xác.
```

English title:

```text
Precision CNC Machining
```

English description:

```text
Precision machining of aluminium, alloys, engineering plastics, composites and technical materials for housings, plates, blocks, fixtures and mechanical components.
```

---

## Capability 04 — Automotive Industry Support Equipment

Media mapping:

```text
capability-automotive-support-v1
```

Vietnamese title:

```text
Thiết bị hỗ trợ ngành ô tô
```

Vietnamese description:

```text
Thiết bị hỗ trợ sản xuất, đồ gá lắp ráp, jig, hệ thống hỗ trợ thao tác, dụng cụ ô tô và thiết bị xưởng chuyên nghiệp.
```

English title:

```text
Automotive Industry Support Equipment
```

English description:

```text
Production-support equipment, assembly fixtures, jigs, operator-assist systems, automotive tools and professional workshop equipment.
```

---

## Capability 05 — Technical Chemicals

Media mapping:

```text
capability-technical-chemicals-v1
```

Vietnamese title:

```text
Hóa chất kỹ thuật
```

Vietnamese description:

```text
Hóa chất hỗ trợ ô tô, phụ gia nhiên liệu, dầu bôi trơn và các giải pháp làm sạch hệ thống nhiên liệu, kim phun, buồng đốt và bộ xử lý khí thải.
```

English title:

```text
Technical Chemicals
```

English description:

```text
Automotive support chemicals, fuel additives, lubricants and cleaning solutions for fuel systems, injectors, combustion chambers and catalytic systems.
```

---

# 7. Capability layout

Tạo responsive editorial card grid.

## Desktop

Ưu tiên bố cục:

- 12-column grid;
- hàng đầu gồm hai card rộng;
- hàng thứ hai gồm ba card;
- card trong cùng một hàng có chiều cao cân bằng;
- không được làm capability đầu tiên trông quan trọng hơn về mặt thương mại so với các capability còn lại;
- bố cục phải tạo được nhịp thị giác tự nhiên, không giống product catalog.

## Tablet

- 2 columns;
- card cuối có thể span full width nếu bố cục đẹp hơn;
- tránh một cột quá dài hoặc mất cân bằng.

## Mobile

- một card mỗi hàng;
- spacing rõ ràng;
- title và description dễ đọc;
- ảnh giữ được nhân vật, máy móc và hoạt động công nghiệp chính;
- không crop quá sát;
- card không quá cao;
- không dùng padding dư thừa.

## Mỗi capability card gồm

- approved capability image;
- capability number:
  - `01`
  - `02`
  - `03`
  - `04`
  - `05`
- localized title;
- localized short description.

Không thêm:

- price;
- badge kiểu sản phẩm;
- “Buy now”;
- fake statistics;
- fake project counts;
- fake certification;
- fake customer logo;
- “Learn more” link giả;
- decorative icon lớn.

Card chưa cần clickable vì chưa có capability detail pages.

Có thể thêm hover treatment rất nhẹ trên thiết bị có hover, nhưng không được biến thành interactive product cards.

---

# 8. Image integration

Sử dụng các responsive image variants đã được generate trong:

```text
public/images/capabilities/
```

Ưu tiên dùng typed media manifest hiện tại.

Không reference trực tiếp:

```text
assets/source-approved/
```

Ảnh capability có tỷ lệ gốc landscape 4:3.

Yêu cầu:

- dùng `next/image`;
- khai báo `sizes` phù hợp với grid;
- không gây cumulative layout shift;
- crop vừa phải;
- giữ được hoạt động chính;
- không làm mất nhân sự, máy móc hoặc bối cảnh cần thiết;
- alt text phải localized, factual và ngắn gọn;
- không mô tả ảnh như bằng chứng về một dự án Ktech cụ thể.

---

# 9. Header integration

Kiểm tra Header navigation hiện tại.

Kết nối các nav item tương ứng tới:

```text
#about
#capabilities
```

Chỉ sửa phần href hoặc anchor behavior nếu cần.

Không thay đổi trong task này:

- Header layout;
- logo presentation;
- Header CTA;
- locale switch styling;
- Hero typography;
- Hero content positioning;
- Hero visual treatment.

Nếu Header là sticky hoặc fixed, bảo đảm anchor navigation không khiến heading bị che hoàn toàn. Có thể dùng `scroll-margin-top` ở section thay vì refactor Header.

---

# 10. Section transition

Bảo đảm nhịp chuyển:

```text
Hero
→ About
→ Capabilities
```

có chủ đích.

Yêu cầu:

- không để About quá mỏng hoặc giống một text block tạm thời;
- không để Capabilities bắt đầu quá sát About;
- tránh lặp lại cùng một background, cùng một card treatment hoặc cùng một hierarchy ở cả hai section;
- toàn trang phải vẫn giữ slogan trong Hero là visual focus chính;
- About và Capabilities hỗ trợ Hero, không cạnh tranh với Hero.

---

# 11. Component architecture

Tạo component mới theo đúng architecture hiện tại.

Có thể tạo các component như:

```text
AboutSection
CapabilitiesSection
CapabilityCard
SectionHeading
```

nhưng chỉ tạo abstraction khi thực sự có lợi.

Yêu cầu:

- không over-engineer;
- không tạo component chỉ để wrap một `div`;
- content typing rõ ràng;
- visual components không chứa localized copy hardcoded;
- Server Components mặc định;
- không thêm `"use client"` nếu không có interaction thực sự cần thiết.

---

# 12. Responsive review

Tự kiểm tra tối thiểu các kích thước:

```text
375px
430px
768px
1024px
1440px
```

Kiểm tra:

- không horizontal overflow;
- không text clipping;
- heading không xuống dòng bất hợp lý;
- card titles dài tiếng Anh vẫn ổn;
- image crops vẫn hợp lý;
- khoảng cách giữa Hero, About và Capabilities;
- Header anchor không che section heading;
- VI và EN đều render đúng;
- không có layout shift rõ ràng.

---

# 13. Accessibility

Yêu cầu tối thiểu:

- semantic `<section>`;
- heading hierarchy hợp lý;
- chỉ một `<h1>` trên page nếu Hero đang sử dụng `<h1>`;
- About và Capabilities dùng heading level tiếp theo phù hợp;
- alt text localized;
- contrast đủ tốt;
- không truyền tải thông tin chỉ bằng màu sắc;
- không thêm ARIA dư thừa;
- không biến card thành link hoặc button nếu không có navigation.

---

# 14. Validation

Sau khi triển khai, chạy:

```bash
npm run lint
npm run typecheck
npm run build
git status --short
git diff --stat
```

Nếu lint, typecheck hoặc build lỗi do thay đổi của task này, phải sửa hết trước khi kết thúc.

Không được:

- commit;
- push;
- reset;
- stash;
- discard file không thuộc scope;
- xóa thay đổi có sẵn của người dùng.

---

# 15. Final response

Sau khi hoàn thành, báo cáo ngắn gọn:

1. files đã tạo hoặc chỉnh sửa;
2. component và layout đã triển khai;
3. localization đã bổ sung;
4. cách tích hợp 5 capability images;
5. cách xử lý responsive;
6. kết quả:
   - lint;
   - typecheck;
   - build;
7. trạng thái `git status --short`;
8. các điểm còn cần visual review.

Không tuyên bố hoàn thành nếu lint, typecheck và build chưa pass.

Không commit hoặc push.
