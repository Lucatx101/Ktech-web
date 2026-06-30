# KTECH-WEB — CODEX TASK 04
## Build Manufacturing, Contact CTA and Footer

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

---

# 1. Mục tiêu

Hoàn thiện phần còn lại của homepage Ktech Việt Nam bằng ba khu vực:

1. **Direct Manufacturing Capability**
2. **Contact CTA**
3. **Footer**

Header, Hero, About và Five Core Capabilities đã được triển khai. Trong task này:

- giữ nguyên cấu trúc và visual direction hiện tại;
- không redesign Header/Hero;
- không thực hiện final polish toàn trang;
- chỉ chỉnh navigation anchor nếu cần kết nối tới section mới;
- không tạo thêm trang con.

Sau task này, homepage cần có đầy đủ cấu trúc chính:

```text
Header
Hero
About
Capabilities
Manufacturing
Contact CTA
Footer
```

---

# 2. Xác minh repository

Trước khi chỉnh sửa, chạy:

```bash
pwd
git status --short
git branch --show-current
git log --oneline -5
```

Yêu cầu:

- repository phải là `/Users/lucatxtruong/Documents/Ktech-web`;
- branch phải là `main`;
- audit các thay đổi hiện có trước khi sửa;
- không xóa, reset, stash hoặc ghi đè thay đổi của người dùng.

Nếu repository hoặc branch không đúng, dừng lại và báo rõ.

Review tối thiểu:

- homepage composition hiện tại;
- Header navigation;
- Hero, About và Capabilities components;
- dictionaries VI/EN;
- content types;
- design tokens và `globals.css`;
- reusable section/component patterns;
- media manifest;
- current responsive behavior.

Không chỉnh sửa:

```text
assets/source-approved/
```

---

# 3. Nguyên tắc chung

- Next.js App Router;
- TypeScript strict;
- Tailwind CSS 4;
- Server Components mặc định;
- không thêm dependency nếu không thực sự cần;
- localized content phải tách khỏi visual components;
- hỗ trợ `/vi` và `/en`;
- semantic HTML;
- accessible heading hierarchy;
- responsive desktop, tablet và mobile;
- không invent dữ liệu;
- không tạo fake customer, partner, certification, project, result hoặc production capacity;
- không tạo fake contact information;
- không tạo link tới page chưa tồn tại;
- không biến website thành product catalog hoặc retail website;
- không commit hoặc push.

Visual direction:

```text
Industrial Intelligence
```

Ưu tiên:

- industrial;
- technical;
- credible;
- restrained;
- modern;
- B2B;
- premium nhưng không luxury.

Tránh:

- neon;
- cyberpunk;
- excessive sci-fi;
- hologram;
- glassmorphism;
- heavy gradients;
- heavy shadows;
- generic startup styling;
- retail cards;
- decorative dashboards;
- animation không cần thiết.

---

# 4. Section A — Direct Manufacturing Capability

Thêm section:

```html
id="manufacturing"
```

## Mục tiêu

Thể hiện rõ Ktech không chỉ tư vấn hoặc tích hợp giải pháp mà còn có năng lực sản xuất trực tiếp.

Section phải truyền đạt:

- physical production capability;
- engineering depth;
- khả năng chuyển từ thiết kế sang chế tạo;
- quy mô thực tế, đáng tin cậy;
- không phóng đại thành mega-factory hoặc tập đoàn sản xuất quy mô lớn.

Không có approved manufacturing image riêng trong task này.

Vì vậy, ưu tiên thiết kế bằng:

- typography;
- verified production figures;
- structured equipment list;
- restrained technical grid;
- lines, dividers và numbering;
- CSS/SVG đơn giản nếu thực sự cần.

Không dùng ảnh capability làm ảnh manufacturing nếu điều đó gây hiểu sai.

## Nội dung xác minh

Ktech trực tiếp sở hữu:

- khoảng **2.000 m²** tại **hai cơ sở sản xuất**;
- **4 dây chuyền sản xuất**;
- khoảng **50 máy CNC**;
- **2 máy đúc nhựa/silicone**;
- **dây chuyền hàn robot tự động**;
- **máy laser cladding**;
- các thiết bị kỹ thuật và sản xuất khác.

Không suy diễn thêm:

- sản lượng;
- công suất năm;
- số nhân sự;
- tỷ lệ chính xác;
- tốc độ sản xuất;
- chất lượng được chứng nhận;
- uptime;
- số khách hàng hoặc dự án.

## Nội dung tiếng Việt

Eyebrow:

```text
NĂNG LỰC SẢN XUẤT
```

Heading:

```text
Năng lực kỹ thuật được triển khai bằng hạ tầng sản xuất trực tiếp
```

Introduction:

```text
Ktech trực tiếp đầu tư và vận hành hệ thống thiết bị phục vụ thiết kế, chế tạo, gia công, hàn tự động, đúc vật liệu kỹ thuật và hoàn thiện các giải pháp công nghiệp.
```

Verified figures:

```text
Khoảng 2.000 m²
Hai cơ sở sản xuất

4
Dây chuyền sản xuất

Khoảng 50
Máy CNC

2
Máy đúc nhựa/silicone
```

Equipment heading:

```text
Hạ tầng kỹ thuật tiêu biểu
```

Equipment items:

```text
Dây chuyền hàn robot tự động
Máy laser cladding
Hệ thống máy CNC
Thiết bị đúc nhựa và silicone
Các thiết bị kỹ thuật và sản xuất khác
```

## Nội dung tiếng Anh

Eyebrow:

```text
MANUFACTURING CAPABILITY
```

Heading:

```text
Engineering capability supported by direct manufacturing infrastructure
```

Introduction:

```text
Ktech directly invests in and operates equipment for engineering design, fabrication, machining, automated welding, technical-material moulding and the completion of industrial solutions.
```

Verified figures:

```text
Approximately 2,000 m²
Across two production facilities

4
Production lines

Approximately 50
CNC machines

2
Plastic/silicone moulding machines
```

Equipment heading:

```text
Key technical infrastructure
```

Equipment items:

```text
Automated robotic welding line
Laser cladding machine
CNC machining systems
Plastic and silicone moulding equipment
Other engineering and production equipment
```

## Layout direction

Desktop:

- section có visual weight mạnh hơn About nhưng không cạnh tranh với Hero;
- có thể dùng dark navy/graphite background để tạo nhịp xen kẽ với Capabilities;
- một vùng heading/intro rõ ràng;
- verified figures đặt thành structured grid;
- equipment list đặt như technical inventory, không phải product cards;
- giữ hierarchy cân bằng, tránh làm số “50 CNC” lấn át toàn section.

Tablet/mobile:

- figures chuyển thành 2 cột hoặc 1 cột tùy breakpoint;
- tránh số liệu quá lớn gây scroll dài;
- equipment list dễ quét;
- không horizontal overflow.

Có thể dùng các nhãn:

```text
01
02
03
04
```

nhưng không biến section thành infographic phức tạp.

---

# 5. Section B — Contact CTA

Thêm section:

```html
id="contact"
```

## Mục tiêu

Tạo điểm kết thúc rõ ràng cho homepage và mời khách hàng B2B trao đổi về nhu cầu kỹ thuật hoặc dự án.

Không dùng ngôn ngữ bán lẻ, khuyến mại hoặc sales pressure.

## Nội dung tiếng Việt

Eyebrow:

```text
TRAO ĐỔI CÙNG KTECH
```

Heading:

```text
Bắt đầu từ một yêu cầu kỹ thuật thực tế
```

Body:

```text
Ktech sẵn sàng trao đổi về nhu cầu thiết kế, chế tạo, tích hợp hệ thống và các giải pháp công nghệ cho doanh nghiệp.
```

Primary CTA label:

```text
Trao đổi dự án
```

Secondary CTA label, chỉ dùng khi có destination hợp lệ trong repository:

```text
Tìm hiểu năng lực
```

## Nội dung tiếng Anh

Eyebrow:

```text
TALK TO KTECH
```

Heading:

```text
Start with a real engineering requirement
```

Body:

```text
Ktech is ready to discuss engineering design, manufacturing, system integration and technology solutions for businesses.
```

Primary CTA label:

```text
Discuss a project
```

Secondary CTA label, chỉ dùng khi có destination hợp lệ trong repository:

```text
Explore capabilities
```

## Contact destination

Audit repository để tìm contact information hoặc contact destination đã được xác minh.

Chỉ sử dụng:

- verified email;
- verified phone;
- verified contact route;
- anchor nội bộ đang tồn tại.

Nếu repository chưa có contact information được xác minh:

- không invent email, phone, address hoặc URL;
- không dùng placeholder như `info@example.com`;
- không tạo fake contact page;
- giữ CTA section hoàn chỉnh về layout nhưng không tạo nút có destination giả;
- có thể dùng một internal link hợp lệ quay lại `#capabilities` cho secondary CTA;
- báo rõ trong final response rằng primary contact destination cần người dùng cung cấp.

Không tạo contact form nếu không có backend hoặc yêu cầu cụ thể.

---

# 6. Section C — Footer

Tạo footer corporate gọn, rõ và phù hợp website B2B.

## Nội dung được phép sử dụng

- Ktech Việt Nam;
- legal name:
  - `Ktech Viet Nam Company Limited`;
- established:
  - `2015`;
- slogan:
  - `Understand the universe`;
- navigation tới các section hiện có;
- VI/EN locale navigation nếu phù hợp với architecture hiện tại;
- verified contact details nếu repository đã có.

Không invent:

- địa chỉ;
- email;
- số điện thoại;
- social links;
- tax code;
- certification;
- partner logo;
- copyright year động nếu implementation hiện tại không cần.

## Footer navigation

Có thể dùng các anchor hiện có:

```text
#about
#capabilities
#manufacturing
#contact
```

Vietnamese labels:

```text
Giới thiệu
Năng lực
Sản xuất
Liên hệ
```

English labels:

```text
About
Capabilities
Manufacturing
Contact
```

Footer cần:

- compact nhưng không quá mỏng;
- visual integration tốt với Contact CTA;
- không lặp lại toàn bộ Header;
- không thêm newsletter;
- không thêm social icons giả;
- không thêm legal links nếu chưa có page tương ứng.

---

# 7. Header integration

Kiểm tra navigation hiện tại và nối đúng:

```text
Giới thiệu / About       → #about
Năng lực / Capabilities  → #capabilities
Sản xuất / Manufacturing → #manufacturing
Liên hệ / Contact        → #contact
```

Chỉ chỉnh `href`, anchor behavior hoặc `scroll-margin-top` nếu cần.

Không thay đổi:

- Header composition;
- logo styling;
- locale switch styling;
- Header CTA styling;
- Hero typography;
- Hero visual treatment.

---

# 8. Component architecture

Có thể tạo:

```text
ManufacturingSection
ContactSection
SiteFooter
ProductionStat
```

Chỉ tạo abstraction khi thực sự giảm lặp hoặc làm content typing rõ hơn.

Yêu cầu:

- không over-engineer;
- không thêm `"use client"` nếu không cần interaction;
- không hardcode VI/EN copy trong visual components;
- reuse section/container patterns hiện tại;
- không refactor rộng ngoài scope.

---

# 9. Responsive review

Kiểm tra tối thiểu:

```text
375px
430px
768px
1024px
1440px
```

Kiểm tra:

- không horizontal overflow;
- verified figures không bị vỡ layout;
- heading tiếng Anh không clipping;
- section transition hợp lý:
  - Capabilities → Manufacturing;
  - Manufacturing → Contact;
  - Contact → Footer;
- footer navigation dễ dùng trên mobile;
- Header anchor không che section headings;
- VI và EN đều render đúng.

---

# 10. Accessibility

- semantic `<section>` và `<footer>`;
- heading hierarchy đúng;
- chỉ một `<h1>` trên homepage;
- contrast đủ tốt;
- link/button có accessible name;
- visible focus state;
- không tạo button nếu thực tế chỉ là decorative block;
- không dùng ARIA dư thừa;
- motion phải tôn trọng `prefers-reduced-motion` nếu có thêm transition.

---

# 11. Validation

Sau khi triển khai, chạy:

```bash
npm run lint
npm run typecheck
npm run build
git status --short
git diff --stat
```

Fix toàn bộ lỗi do task này gây ra.

Không được:

- commit;
- push;
- reset;
- stash;
- discard thay đổi của người dùng;
- chỉnh sửa approved source assets.

---

# 12. Final response

Báo cáo ngắn gọn:

1. files đã tạo hoặc chỉnh sửa;
2. Manufacturing layout và cách trình bày verified figures;
3. Contact CTA và destination được sử dụng;
4. Footer structure;
5. localization changes;
6. responsive handling;
7. kết quả lint, typecheck và build;
8. trạng thái `git status --short`;
9. thông tin liên hệ nào còn thiếu và cần người dùng xác nhận;
10. các điểm cần visual review.

Không tuyên bố hoàn thành nếu lint, typecheck hoặc build chưa pass.

Không commit hoặc push.
