# KTECH-WEB — CODEX TASK 05
## Full Homepage Visual Polish, Responsive Refinement and Final QA

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

Homepage hiện đã có đầy đủ cấu trúc:

```text
Header
Hero
About
Capabilities
Manufacturing
Contact CTA
Footer
```

Task này là vòng **polish toàn trang**, không phải xây thêm section mới.

Mục tiêu:

- hoàn thiện visual hierarchy;
- tinh chỉnh typography;
- cân lại spacing và section rhythm;
- cải thiện Header và Hero;
- làm đồng nhất toàn bộ homepage;
- refine responsive desktop/tablet/mobile;
- accessibility, SEO và performance final pass;
- giữ nguyên nội dung và asset đã duyệt;
- không mở rộng scope sang trang con.

Không tạo thêm:

- section mới;
- ảnh mới;
- illustration mới;
- dependency mới nếu không thực sự cần;
- animation library;
- marketing claim;
- contact information chưa xác minh.

---

# 2. Xác minh repository trước khi chỉnh sửa

Chạy:

```bash
pwd
git status --short
git branch --show-current
git log --oneline -5
```

Yêu cầu:

- repository phải là `/Users/lucatxtruong/Documents/Ktech-web`;
- branch phải là `main`;
- working tree cần được audit trước khi sửa;
- không reset, stash, discard hoặc overwrite thay đổi của người dùng.

Nếu repository hoặc branch không đúng, dừng lại và báo rõ.

Review toàn bộ:

- homepage composition;
- Header;
- Hero;
- About;
- Capabilities;
- Manufacturing;
- Contact CTA;
- Footer;
- VI/EN dictionaries;
- design tokens;
- `globals.css`;
- current responsive behavior;
- image handling;
- metadata/SEO implementation;
- accessibility structure.

Không chỉnh sửa:

```text
assets/source-approved/
```

---

# 3. Nguyên tắc không được phá vỡ

Website là corporate profile website của **Ktech Việt Nam**, không phải:

- e-commerce;
- retail website;
- online product catalog;
- startup landing page.

Brand direction:

```text
Industrial Intelligence
```

Ưu tiên:

- credible;
- technical;
- industrial;
- restrained;
- modern;
- B2B;
- premium nhưng không luxury.

Màu sắc:

- deep navy;
- technology blue;
- graphite;
- white;
- light grey;
- red chỉ là minor accent.

Tránh:

- neon;
- cyberpunk;
- excessive sci-fi;
- glassmorphism;
- hologram;
- heavy gradients;
- heavy shadows;
- oversized rounded cards;
- decorative dashboards;
- flashy motion;
- generic startup aesthetics.

Slogan cốt lõi:

```text
Understand the universe
```

Không tạo headline hoặc slogan mới cạnh tranh với slogan này.

---

# 4. Header polish

Giữ nguyên cấu trúc và navigation hiện có, nhưng refine presentation.

## Logo

Logo hiện là JPG nền trắng.

Yêu cầu:

- không redesign logo;
- không chỉnh artwork;
- không crop mất tagline;
- dùng compact light/white brand badge có chủ đích;
- padding cân bằng;
- border rất nhẹ;
- radius nhỏ;
- không dùng shadow nặng;
- tăng visible logo size vừa đủ;
- mobile không oversized;
- logo phải hòa nhập với Header thay vì trông như ảnh dán tạm.

## Navigation

- giữ đúng anchor links hiện có;
- active/hover/focus state rõ nhưng restrained;
- spacing desktop hợp lý;
- không làm nav quá loãng;
- bảo đảm tiếng Anh dài hơn vẫn không gây chật.

## Locale switch

- giảm footprint;
- active state rõ;
- không cạnh tranh với primary CTA;
- keyboard focus rõ.

## Header CTA

Giữ nội dung:

Vietnamese:

```text
Trao đổi dự án
```

English:

```text
Discuss a project
```

- không đổi thành “Liên hệ” vì nav đã có Contact;
- không tạo destination giả;
- giữ behavior hiện tại nếu đã nối đúng tới `#contact`;
- refine size, padding và contrast.

## Mobile Header

- logo và menu footprint gọn hơn;
- không làm header quá cao;
- menu-open state phải dễ đọc và không overflow;
- kiểm tra tap target;
- không che nội dung Hero;
- giữ brand presence nhưng tránh chiếm diện tích quá nhiều.

---

# 5. Hero polish

Không đổi Hero image.

## Slogan hierarchy

Refine slogan theo hướng:

```text
Understand
the UNIVERSE
```

Trong đó:

- `Understand`: lớn;
- `the`: nhỏ rõ rệt, khoảng 40–55% so với `UNIVERSE`;
- `UNIVERSE`: là điểm nhấn mạnh nhất;
- có thể uppercase;
- không glow;
- không outline;
- không gradient text;
- không animation phô trương.

Mobile có thể dùng:

```text
Understand
the
UNIVERSE
```

nhưng:

- `the` phải nhỏ;
- `the` phải gắn thị giác với `UNIVERSE`;
- không được trông như ba dòng ngang hàng.

## Eyebrow

`KTECH VIỆT NAM` hiện cần rõ vai trò thương hiệu hơn.

Refine:

- tăng size vừa phải;
- tăng weight;
- tăng contrast;
- tracking vừa phải;
- có thể thêm một line hoặc blue marker nhỏ;
- không dùng box lớn;
- không decorative technical notation quá mức.

## Hero content

- giữ supporting copy và CTA hiện có;
- refine max-width;
- refine line-height;
- cân lại khoảng cách giữa eyebrow, slogan, paragraph và CTA;
- không để Hero content nằm quá thấp trên mobile;
- tránh khoảng trống đầu Hero quá lớn;
- paragraph vẫn dễ đọc trên nền ảnh;
- giữ robot và welding action trong crop;
- overlay đủ contrast nhưng không làm ảnh quá tối.

## Hero height

- desktop: strong visual impact nhưng không kéo dài không cần thiết;
- mobile: tránh quá cao khiến người dùng phải scroll lâu mới tới About;
- kiểm tra viewport nhỏ và browser chrome trên điện thoại.

---

# 6. About polish

Không thay đổi nội dung.

Refine:

- hierarchy giữa eyebrow, heading và body;
- two-column balance desktop;
- vertical rhythm mobile;
- capability chain phải đọc như một quy trình liên tục;
- line/divider/numbering nhẹ và có logic;
- không biến workflow thành four-card feature grid;
- tránh khoảng trắng quá nhiều;
- transition Hero → About phải rõ và có chủ đích.

---

# 7. Capabilities polish

Giữ nguyên 5 capability groups và 5 approved images.

Refine:

- card grid balance;
- image crop;
- title wrapping;
- description line length;
- numbering `01–05`;
- border, spacing và hover treatment;
- equal visual weight giữa 5 capability;
- không làm card 01 quan trọng hơn các card còn lại;
- không biến layout thành product catalog;
- tránh card quá bo tròn hoặc quá nhiều shadow.

Desktop:

- kiểm tra bố cục 2 card + 3 card;
- card heights cân bằng theo hàng;
- không để title dài tiếng Anh làm vỡ nhịp.

Tablet:

- hai cột;
- card cuối span full width chỉ khi thực sự đẹp hơn.

Mobile:

- một card mỗi hàng;
- hình không crop mất nhân vật hoặc máy móc;
- card không quá cao;
- spacing vừa đủ;
- title dễ đọc;
- tránh scroll quá dài do padding dư.

---

# 8. Manufacturing polish

Không thay đổi verified figures hoặc equipment list.

Refine:

- visual hierarchy giữa heading, intro, figures và equipment list;
- số liệu rõ nhưng không phô trương;
- “Khoảng 50 máy CNC” không được lấn át toàn section;
- technical grid/divider có hệ thống;
- dark background cần đủ contrast;
- không biến thành infographic phức tạp;
- không làm giống dashboard;
- mobile figures dễ quét và không overflow;
- transition Capabilities → Manufacturing phải có nhịp rõ.

---

# 9. Contact CTA polish

Không invent contact details.

Refine:

- CTA phải là điểm kết thúc rõ ràng của homepage;
- heading có lực nhưng không mang giọng sales pressure;
- button hierarchy rõ;
- không dùng fake destination;
- giữ destination hiện tại nếu hợp lệ;
- nếu primary CTA đang chỉ anchor tới `#contact`, bảo đảm không tự link về chính nó một cách vô nghĩa;
- nếu chưa có contact destination hợp lệ, giữ layout đẹp nhưng không tạo nút giả;
- Contact → Footer phải liền mạch.

---

# 10. Footer polish

Refine:

- compact nhưng không quá mỏng;
- không lặp lại nguyên Header;
- brand, slogan và navigation có hierarchy rõ;
- mobile stack gọn;
- không thêm social icons giả;
- không thêm legal links chưa có;
- không invent contact details;
- kiểm tra locale navigation nếu đang dùng;
- focus state rõ;
- khoảng cách cuối trang hợp lý.

---

# 11. Section rhythm toàn trang

Review toàn bộ luồng:

```text
Hero
→ About
→ Capabilities
→ Manufacturing
→ Contact
→ Footer
```

Cân lại:

- section padding;
- container width;
- heading max-width;
- paragraph max-width;
- background transitions;
- divider usage;
- card spacing;
- desktop/mobile vertical rhythm.

Yêu cầu:

- không section nào trông như được ghép từ template khác;
- không lặp lại cùng một treatment ở mọi section;
- Hero vẫn là visual focus chính;
- About, Capabilities và Manufacturing có hierarchy riêng nhưng cùng hệ thống;
- Contact và Footer tạo kết thúc rõ ràng.

---

# 12. Typography system

Audit typography toàn trang:

- heading sizes;
- body sizes;
- line height;
- letter spacing;
- uppercase eyebrow treatment;
- responsive type scale;
- Vietnamese diacritics;
- English title wrapping.

Yêu cầu:

- tránh font-size quá lớn chỉ để tạo cảm giác premium;
- không làm body text quá nhỏ;
- không dùng quá nhiều font weights;
- không tạo inconsistent heading styles;
- bảo đảm `the` trong Hero có size khác rõ ràng nhưng vẫn cân đối.

Ưu tiên dùng existing font stack và tokens.

Không thêm font mới nếu không thực sự cần.

---

# 13. Responsive refinement

Kiểm tra tối thiểu:

```text
375px
430px
768px
1024px
1280px
1440px
```

Kiểm tra:

- không horizontal overflow;
- không text clipping;
- không heading xuống dòng vô lý;
- Header mobile không quá cao;
- mobile menu hoạt động;
- Hero không tạo khoảng trắng dư;
- CTA không quá cao;
- capability cards không quá dài;
- Manufacturing figures không vỡ layout;
- Footer navigation không chật;
- VI và EN đều ổn;
- anchor navigation không che section heading.

Không fix mobile bằng hardcoded height thiếu ổn định.

---

# 14. Accessibility final pass

Audit:

- semantic landmark;
- chỉ một `<h1>`;
- heading hierarchy;
- alt text;
- keyboard navigation;
- visible focus;
- button/link semantics;
- contrast;
- reduced motion;
- mobile menu accessibility;
- language/locale handling;
- không ARIA dư thừa.

Fix các lỗi thực tế, không over-engineer.

---

# 15. SEO final pass

Audit và refine bằng architecture hiện có:

- localized page title;
- localized meta description;
- canonical strategy nếu đã có;
- alternates/hreflang cho VI/EN nếu phù hợp;
- Open Graph metadata cơ bản;
- semantic content structure;
- noindex không được xuất hiện trên production page;
- không invent organization data chưa xác minh;
- không thêm JSON-LD chứa địa chỉ, phone, email hoặc dữ liệu chưa xác minh.

Không thêm third-party SEO dependency.

---

# 16. Performance final pass

Audit:

- `next/image`;
- image `sizes`;
- priority chỉ cho Hero khi cần;
- không preload tất cả capability images;
- no layout shift;
- không thêm client component không cần thiết;
- không thêm animation library;
- không thêm JavaScript chỉ cho decorative effect;
- giữ Server Components mặc định;
- kiểm tra bundle impact nếu có thay đổi.

Không chỉnh sửa hoặc recompress approved source originals.

---

# 17. Scope control

Không được:

- tạo section mới;
- tạo page mới;
- redesign toàn bộ website;
- thay đổi nội dung đã duyệt;
- thay đổi 5 capability images;
- thay Hero image;
- invent contact data;
- thêm form backend;
- thêm CMS;
- thêm analytics;
- thêm dependency không cần thiết;
- sửa file ngoài scope chỉ để “cleanup”;
- commit hoặc push.

---

# 18. Validation

Sau khi hoàn thành, chạy:

```bash
npm run lint
npm run typecheck
npm run build
git status --short
git diff --stat
```

Fix toàn bộ lỗi do task này gây ra.

Nếu có thể trong môi trường hiện tại, kiểm tra render:

```text
/vi
/en
```

ở desktop và mobile.

Không tuyên bố hoàn thành nếu lint, typecheck hoặc build chưa pass.

---

# 19. Final response

Báo cáo ngắn gọn:

1. files đã chỉnh sửa;
2. Header polish;
3. Hero typography và mobile refinement;
4. section rhythm changes;
5. Capabilities và Manufacturing refinements;
6. Contact/Footer refinements;
7. accessibility changes;
8. SEO changes;
9. performance changes;
10. kết quả lint, typecheck và build;
11. trạng thái `git status --short`;
12. các điểm còn cần visual review.

Không commit hoặc push.
