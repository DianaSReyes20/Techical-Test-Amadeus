namespace API.Models
{
    public class StudentItem
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Date { get; set; }
        public string? Email { get; set; }
        public string? Career { get; set; }
        public int? Semesters { get; set; }
        public string? Decision { get; set; }
        public string? English { get; set; }
        public string? Photo { get; set; }
        public bool IsComplete { get; set; }
    }
}